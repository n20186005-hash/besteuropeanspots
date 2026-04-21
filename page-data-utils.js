const fs = require('fs');
const path = require('path');

const CATEGORY_TO_TEMPLATE = {
  '景点百科': 'encyclopedia',
  '景点游记': 'travelogue',
  '历史人文': 'history',
};

function decodeEscapedText(value = '') {
  return value
    .replace(/\\r/g, '\r')
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'")
    .replace(/\\`/g, '`')
    .replace(/\\\\/g, '\\');
}

function escapeHtml(value = '') {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatInlineText(value = '') {
  return escapeHtml(decodeEscapedText(value)).replace(/\n/g, '<br />');
}

function cleanupHtml(value = '') {
  return value
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function convertInfoRows(jsx) {
  return jsx.replace(
    /<InfoRow\s+label="([^"]+)"\s+value=\{`([\s\S]*?)`\}\s*\/>/g,
    (_, label, value) => {
      return `<div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
  <div class="text-sm text-gray-500 mb-1">${escapeHtml(label)}</div>
  <div class="text-gray-900 font-medium">${formatInlineText(value)}</div>
</div>`;
    }
  );
}

function convertDangerousHtml(jsx) {
  return jsx.replace(
    /<([A-Za-z0-9]+)([^>]*?)\s+dangerouslySetInnerHTML=\{\{\s*__html:\s*"([\s\S]*?)"\s*\}\}\s*\/>/g,
    (_, tag, attrs, innerHtml) => {
      const normalizedAttrs = attrs.replace(/className=/g, 'class=');
      return `<${tag}${normalizedAttrs}>${decodeEscapedText(innerHtml)}</${tag}>`;
    }
  );
}

function convertTemplateLiterals(jsx) {
  return jsx.replace(/\{`([\s\S]*?)`\}/g, (_, value) => formatInlineText(value));
}

function stripReactArtifacts(jsx) {
  return jsx
    .replace(/\{''\}/g, '')
    .replace(/\{""\}/g, '')
    .replace(/\{null\}/g, '')
    .replace(/\{undefined\}/g, '')
    .replace(/\s+className=/g, ' class=');
}

function convertSectionJsxToHtml(sectionJsx) {
  let html = sectionJsx.trim();
  html = convertInfoRows(html);
  html = convertDangerousHtml(html);
  html = convertTemplateLiterals(html);
  html = stripReactArtifacts(html);
  return cleanupHtml(html);
}

function parseMetadata(tsx) {
  const metadataMatch = tsx.match(
    /export const metadata: Metadata = \{\s*title:\s*'([\s\S]*?)',\s*description:\s*'([\s\S]*?)',?\s*\}/
  );

  return {
    title: metadataMatch ? decodeEscapedText(metadataMatch[1]) : '',
    description: metadataMatch ? decodeEscapedText(metadataMatch[2]) : '',
  };
}

function parseBreadcrumbs(tsx) {
  const itemsMatch = tsx.match(/<Breadcrumb\s+items=\{\[([\s\S]*?)\]\}\s*\/>/);
  if (!itemsMatch) return [];

  const breadcrumbs = [];
  const itemRegex = /\{\s*label:\s*'([\s\S]*?)',\s*href:\s*'([\s\S]*?)'\s*\}/g;
  let match;

  while ((match = itemRegex.exec(itemsMatch[1])) !== null) {
    breadcrumbs.push({
      label: decodeEscapedText(match[1]),
      href: decodeEscapedText(match[2]),
    });
  }

  return breadcrumbs;
}

function parseHero(tsx) {
  const titleMatch = tsx.match(/<h1[^>]*>\{`([\s\S]*?)`\}<\/h1>/);
  const descriptionMatch = tsx.match(
    /<p className="text-lg text-gray-600 mb-6">\s*\{`([\s\S]*?)`\}\s*<\/p>/
  );

  return {
    title: titleMatch ? decodeEscapedText(titleMatch[1]) : '',
    description: descriptionMatch ? decodeEscapedText(descriptionMatch[1]) : '',
  };
}

function parseRelatedItems(sectionHtml) {
  const items = [];
  const regex =
    /<a href="\/attractions\/([^"]+)"[\s\S]*?<h4[^>]*>([\s\S]*?)<\/h4>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g;
  let match;

  while ((match = regex.exec(sectionHtml)) !== null) {
    items.push({
      slug: match[1],
      name: cleanupHtml(match[2]).replace(/<[^>]+>/g, '').trim(),
      englishName: cleanupHtml(match[3]).replace(/<[^>]+>/g, '').trim(),
    });
  }

  return items;
}

function parseSections(tsx) {
  const sections = [];
  const sectionRegex = /<Section title=(?:"([\s\S]*?)"|\{`([\s\S]*?)`\})>([\s\S]*?)<\/Section>/g;
  let match;

  while ((match = sectionRegex.exec(tsx)) !== null) {
    const title = decodeEscapedText(match[1] || match[2] || '');
    const bodyHtml = convertSectionJsxToHtml(match[3]);

    if (!title || !bodyHtml) continue;

    if (title === '猜你喜欢') {
      sections.push({
        title,
        bodyHtml,
        relatedItems: parseRelatedItems(bodyHtml),
      });
      continue;
    }

    sections.push({ title, bodyHtml });
  }

  return sections;
}

function detectTemplate(breadcrumbs, slug) {
  const categoryLabel = breadcrumbs[1]?.label || '';
  if (CATEGORY_TO_TEMPLATE[categoryLabel]) {
    return CATEGORY_TO_TEMPLATE[categoryLabel];
  }
  if (slug.endsWith('-history')) return 'history';
  if (slug.endsWith('-travelogue')) return 'travelogue';
  return 'encyclopedia';
}

function parsePageTsx(tsx, slug) {
  const metadata = parseMetadata(tsx);
  const breadcrumbs = parseBreadcrumbs(tsx);
  const hero = parseHero(tsx);
  const sections = parseSections(tsx);

  return {
    slug,
    template: detectTemplate(breadcrumbs, slug),
    metadata,
    breadcrumbs,
    hero,
    sections,
  };
}

function parsePageFile(filePath) {
  const slug = path.basename(path.dirname(filePath));
  const tsx = fs.readFileSync(filePath, 'utf8');
  return parsePageTsx(tsx, slug);
}

function getContentFilePath(rootDir, slug) {
  return path.join(rootDir, 'src', 'data', 'attraction-pages', `${slug}.json`);
}

function writePageData(rootDir, pageData) {
  const contentDir = path.join(rootDir, 'src', 'data', 'attraction-pages');
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  const filePath = getContentFilePath(rootDir, pageData.slug);
  fs.writeFileSync(filePath, JSON.stringify(pageData, null, 2), 'utf8');
  return filePath;
}

module.exports = {
  parsePageTsx,
  parsePageFile,
  writePageData,
  getContentFilePath,
};
