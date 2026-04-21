const fs = require('fs');
const path = require('path');
const {
  normalizeAttractionRecord,
  normalizeCountryPayload,
} = require('./taxonomy-country-utils');

const rootDir = __dirname;
const attractionsPath = path.join(rootDir, 'src', 'data', 'attractions.json');
const pageDataDir = path.join(rootDir, 'src', 'data', 'attraction-pages');

function updateCountryBlock(bodyHtml, countryLabel) {
  return bodyHtml.replace(
    /(<div class="text-sm text-gray-500 mb-1">国家<\/div>\s*<div class="text-gray-900 font-medium">)([\s\S]*?)(<\/div>)/,
    `$1${countryLabel}$3`
  );
}

function updateHeroTitle(heroTitle, englishName, country, city) {
  if (!heroTitle) return heroTitle;
  const parts = heroTitle.split('・');
  if (parts.length >= 4) {
    parts[1] = englishName || parts[1];
    parts[2] = country || parts[2];
    parts[3] = city || parts[3];
    return parts.join('・');
  }
  return heroTitle;
}

function normalizePageData(pageData, normalizedRecord) {
  const primaryCountry = normalizedRecord.countries?.[0] || normalizedRecord.country;
  const primarySlug = normalizedRecord.countrySlug || '';

  if (Array.isArray(pageData.breadcrumbs) && pageData.breadcrumbs.length >= 4) {
    pageData.breadcrumbs[2] = {
      ...pageData.breadcrumbs[2],
      label: normalizedRecord.country,
      href: primarySlug ? `/destinations/${primarySlug}` : pageData.breadcrumbs[2].href,
    };
    pageData.breadcrumbs[3] = {
      ...pageData.breadcrumbs[3],
      href: primarySlug ? `/destinations/${primarySlug}` : pageData.breadcrumbs[3].href,
    };
  }

  if (pageData.hero) {
    pageData.hero.title = updateHeroTitle(
      pageData.hero.title,
      normalizedRecord.englishName,
      normalizedRecord.country,
      normalizedRecord.city
    );
  }

  if (Array.isArray(pageData.sections)) {
    pageData.sections = pageData.sections.map((section) => {
      if (section.title === '2. 基本信息') {
        return {
          ...section,
          bodyHtml: updateCountryBlock(section.bodyHtml, normalizedRecord.country),
        };
      }
      return section;
    });
  }

  if (!primaryCountry && normalizedRecord.country) {
    const fallback = normalizeCountryPayload({
      country: normalizedRecord.country,
      city: normalizedRecord.city,
    });
    normalizedRecord.countries = fallback.countries;
    normalizedRecord.countrySlug = fallback.countrySlug;
  }

  return pageData;
}

const attractions = JSON.parse(fs.readFileSync(attractionsPath, 'utf8'));
const attractionMap = new Map();

const normalizedAttractions = attractions.map((record) => {
  const normalized = normalizeAttractionRecord(record);
  attractionMap.set(normalized.slug, normalized);
  return normalized;
});

fs.writeFileSync(attractionsPath, JSON.stringify(normalizedAttractions, null, 2), 'utf8');

let pageDataUpdated = 0;
if (fs.existsSync(pageDataDir)) {
  const files = fs.readdirSync(pageDataDir).filter((name) => name.endsWith('.json'));
  files.forEach((fileName) => {
    const filePath = path.join(pageDataDir, fileName);
    const slug = fileName.replace(/\.json$/, '');
    const normalizedRecord = attractionMap.get(slug);
    if (!normalizedRecord) return;

    const pageData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const updatedPageData = normalizePageData(pageData, normalizedRecord);
    fs.writeFileSync(filePath, JSON.stringify(updatedPageData, null, 2), 'utf8');
    pageDataUpdated++;
  });
}

console.log(`Normalized ${normalizedAttractions.length} attraction records.`);
console.log(`Updated ${pageDataUpdated} attraction page data files.`);
