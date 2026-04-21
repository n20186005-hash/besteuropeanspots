const fs = require('fs');
const path = require('path');
const { parsePageTsx, writePageData, getContentFilePath } = require('./page-data-utils');

// 配置三个分类及对应的文件夹名
const categories = [
  { id: 'encyclopedia', folderName: 'input-encyclopedia', displayName: '景点百科' },
  { id: 'travelogue', folderName: 'input-travelogue', displayName: '景点游记' },
  { id: 'history', folderName: 'input-history', displayName: '历史人文' }
];

const rootDir = __dirname;
const attractionsDir = path.join(rootDir, 'src', 'app', 'attractions');
const jsonFile = path.join(rootDir, 'src', 'data', 'attractions.json');

// 初始化文件夹
categories.forEach(cat => {
  const dirPath = path.join(rootDir, cat.folderName);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`📁 已创建文件夹：${cat.folderName}`);
  }
});

let totalSuccessCount = 0;
let totalSkippedCount = 0;
let attractionsData = [];

if (fs.existsSync(jsonFile)) {
  attractionsData = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));
}

// 核心解析函数
function cleanMarkdown(text) {
  if (!text) return '';
  // 注意：为了支持富文本，这里不再全局移除 ** 和 * 以及 >
  return text.replace(/#/g, '')    // 移除井号
             .replace(/`/g, '');   // 移除反引号
}

function parseText(text) {
  const data = {};
  const lines = text.split('\n');
  let currentKey = '';
  let currentValue = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    // 兼容 【标签】 或 【 标签 】 以及加粗的 **【标签】**
    const match = line.replace(/\*\*/g, '').match(/^【\s*(.+?)\s*】$/);
    
    if (match) {
      if (currentKey) {
        data[currentKey] = cleanMarkdown(currentValue.join('\n'));
      }
      currentKey = match[1];
      currentValue = [];
    } else if (currentKey) {
      // 不再移除 - 和 *，因为它们可能是无序列表的一部分
      // currentValue.push(line.replace(/^[-*]\s+/, '').replace(/^#+\s*/, ''));
      currentValue.push(line.replace(/^#+\s*/, ''));
    }
  }
  if (currentKey) {
    data[currentKey] = cleanMarkdown(currentValue.join('\n'));
  }
  return data;
}

function escapeJSX(str) {
  if (!str) return '';
  // 解决大括号问题
  return str.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
}

function formatRichTextHtml(text) {
  if (!text) return '';
  // 转换 **粗体** 为 <strong>
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // 转换 *斜体* 为 <em>
  html = html.replace(/\*([^\*]+)\*/g, '<em>$1</em>');
  // 转义双引号以防破坏 JSX 属性
  return html.replace(/"/g, '&quot;');
}

function formatParagraphs(text) {
  if (!text) return '';
  return text.split('\n')
    .filter(p => p.trim())
    .map(p => {
      // 处理引用块 > 
      if (p.startsWith('> ') || p.startsWith('＞ ')) {
        const content = formatRichTextHtml(escapeJSX(p.substring(2)));
        return `              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "${content}" }} />`;
      }
      // 处理无序列表 - 或 *
      if (p.startsWith('- ') || p.startsWith('* ')) {
        const content = formatRichTextHtml(escapeJSX(p.substring(2)));
        return `              <li className="text-gray-700 leading-relaxed mb-2 ml-4 list-disc" dangerouslySetInnerHTML={{ __html: "${content}" }} />`;
      }
      // 普通段落
      const content = formatRichTextHtml(escapeJSX(p));
      return `              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "${content}" }} />`;
    })
    .join('\n');
}

function formatList(text, isTips = false) {
  if (!text) return '';
  return text.split('\n')
    .filter(p => p.trim())
    .map(p => isTips ? `                <li>• {\`${escapeJSX(p).replace(/`/g, '\\`')}\`}</li>` : `              <li className="text-gray-700 leading-relaxed mb-2">{\`${escapeJSX(p).replace(/`/g, '\\`')}\`}</li>`)
    .join('\n');
}

function formatListToCards(text) {
  if (!text) return '';
  return text.split('\n')
    .filter(p => p.trim())
    .map((p, index) => `                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 ${index + 1} 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{\`${escapeJSX(p).replace(/`/g, '\\`')}\`}</p>
                </div>`)
    .join('\n');
}

function formatListToPhotoCards(text) {
  if (!text) return '';
  const lines = text.split('\n').filter(p => p.trim());
  let output = '';
  lines.forEach((line, index) => {
    if (index % 2 === 0) {
      output += `              <div className="space-y-4">\n`;
    }
    const parts = line.split('：');
    const title = parts[0] || '机位推荐';
    const desc = parts[1] || line;
    output += `                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">${index + 1}. {\`${escapeJSX(title).replace(/`/g, '\\`')}\`}</h4>
                  <p className="text-sm text-gray-700">{\`${escapeJSX(desc).replace(/`/g, '\\`')}\`}</p>
                </div>\n`;
    if (index % 2 === 1 || index === lines.length - 1) {
      output += `              </div>\n`;
    }
  });
  return output;
}

function formatListToHotelCards(text) {
  if (!text) return '';
  const colors = [
    { bg: 'bg-blue-50', text: 'text-blue-900', desc: 'text-blue-800' },
    { bg: 'bg-green-50', text: 'text-green-900', desc: 'text-green-800' },
    { bg: 'bg-yellow-50', text: 'text-yellow-900', desc: 'text-yellow-800' },
    { bg: 'bg-purple-50', text: 'text-purple-900', desc: 'text-purple-800' }
  ];
  return text.split('\n')
    .filter(p => p.trim())
    .map((p, index) => {
      const color = colors[index % colors.length];
      const parts = p.split('：');
      const title = parts[0] || '住宿建议';
      const desc = parts[1] || p;
      return `                <div className="${color.bg} p-4 rounded-lg">
                  <h4 className="font-semibold ${color.text} mb-2">{\`${escapeJSX(title).replace(/`/g, '\\`')}\`}</h4>
                  <p className="text-sm ${color.desc}">{\`${escapeJSX(desc).replace(/`/g, '\\`')}\`}</p>
                </div>`;
    })
    .join('\n');
}

// 检查是否传入了强制覆盖参数
const isForceOverwrite = process.argv.includes('--force');
if (isForceOverwrite) {
  console.log('⚠️ 注意：已开启强制覆盖模式！如果文件已存在将被重新生成覆盖。');
}

// 加载永久黑名单
let permanentBlacklist = [];
const blacklistPath = path.join(rootDir, 'permanent-blacklist.json');
if (fs.existsSync(blacklistPath)) {
  permanentBlacklist = JSON.parse(fs.readFileSync(blacklistPath, 'utf8'));
  if (permanentBlacklist.length > 0) {
    console.log(`🛡️  已加载永久黑名单，包含 ${permanentBlacklist.length} 个受保护的链接`);
  }
}

// 开始遍历三个文件夹
let totalFoundFiles = 0;

categories.forEach(cat => {
  const inputDir = path.join(rootDir, cat.folderName);
  // 支持大小写后缀 .txt 和 .md
  const files = fs.readdirSync(inputDir).filter(f => {
    const lowerF = f.toLowerCase();
    return lowerF.endsWith('.txt') || lowerF.endsWith('.md');
  });
  
  if (files.length === 0) {
    console.log(`\n🈳 [${cat.folderName}] 文件夹是空的，没有找到 .txt 或 .md 文件。`);
    return; // 没有文件则跳过
  }

  totalFoundFiles += files.length;
  console.log(`\n🔍 在 [${cat.folderName}] 中找到 ${files.length} 个文件，开始处理...`);

  files.forEach(file => {
    const filePath = path.join(inputDir, file);
    const rawText = fs.readFileSync(filePath, 'utf-8');
    const data = parseText(rawText);

    if (!data['景点中文名'] || !data['路由缩写(slug)']) {
      console.log(`  ❌ 跳过: [${file}] - 缺少必填标题！请确保文件内包含【景点中文名】和【路由缩写(slug)】这两个标题。`);
      return;
    }

    // 处理路由缩写：为了避免百科、游记、历史的 URL 冲突，根据分类自动添加后缀
    let baseSlug = data['路由缩写(slug)'].toLowerCase().replace(/[^a-z0-9-]/g, '-');
    let slug = baseSlug;
    
    // 如果是游记，后缀加 -travelogue；如果是历史，后缀加 -history；百科保持原样作为主页
    // 但必须确保这是在新建或者尚未包含该后缀的情况下
    if (cat.id === 'travelogue') {
      if (!slug.endsWith('-travelogue')) slug += '-travelogue';
    } else if (cat.id === 'history') {
      if (!slug.endsWith('-history')) slug += '-history';
    }

    const pageDir = path.join(attractionsDir, slug);
    const pageFile = path.join(pageDir, 'page.tsx');
    const contentFile = getContentFilePath(rootDir, slug);

    // 检查是否在永久黑名单中
    if (permanentBlacklist.includes(slug)) {
      console.log(`  🚫 跳过黑名单: [${data['景点中文名']}] (${slug}) 受永久保护，不会生成。`);
      totalSkippedCount++;
      return;
    }

    // 【防重复检查】如果页面文件已经存在，且没有开启强制覆盖，则跳过
    if (!isForceOverwrite && (fs.existsSync(contentFile) || fs.existsSync(pageFile))) {
      console.log(`  ⏩ 跳过: [${data['景点中文名']}] (${slug}) 已存在，无需重复生成。`);
      totalSkippedCount++;
      return;
    }

    const componentName = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('') + 'Page';

    // 对有可能插入到单引号字符串中的字段进行安全转义，防止破坏 TSX 语法
    const safeTitle = (data['SEO标题'] || `${data['景点中文名']}・${data['景点英文名']}・${data['国家']}・${data['城市']} | 最佳欧洲景点`).replace(/'/g, "\\'");
    const safeDesc = (data['SEO描述'] || data['核心简介'] || '').substring(0, 150).replace(/\n/g, ' ').replace(/'/g, "\\'");

    // 从已有数据库中随机抽取 3 个相关的景点（同国家或同类型），作为猜你喜欢
    const relatedAttractions = attractionsData
      .filter(a => a.slug !== slug && (a.country === data['国家'] || a.type === data['类型']))
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    let relatedHtml = '';
    if (relatedAttractions.length > 0) {
      relatedHtml = `
          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
${relatedAttractions.map(a => `              <a href="/attractions/${a.slug}" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    ${a.name[0]}
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">${a.name}</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">${a.englishName}</p>
                  </div>
                </div>
              </a>`).join('\n')}
            </div>
          </Section>`;
    }

    // 动态构建 Section
    let sectionIndex = 1;
    let sectionsHtml = '';

    // 1. 景点介绍 / 导语
    if (data['核心简介'] || data['导语']) {
      sectionsHtml += `
          <Section title="${sectionIndex++}. ${data['导语'] ? '导语' : '景点介绍'}">
${formatParagraphs(data['核心简介'] || data['导语'])}
          </Section>\n`;
    }

    // 2. 基本信息 (如果是纯历史页，可能不需要这块，但保留兼容)
    if (data['景点中文名']) {
      sectionsHtml += `
          <Section title="${sectionIndex++}. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={\`${(data['景点中文名'] || '').replace(/`/g, '\\`')}\`} />
                <InfoRow label="英文名称" value={\`${(data['景点英文名'] || '').replace(/`/g, '\\`')}\`} />
                <InfoRow label="正式名称" value={\`${(data['正式名称'] || data['景点英文名'] || '').replace(/`/g, '\\`')}\`} />
                <InfoRow label="国家" value={\`${(data['国家'] || '').replace(/`/g, '\\`')}\`} />
                <InfoRow label="城市" value={\`${(data['城市'] || '').replace(/`/g, '\\`')}\`} />
              </div>
              ${(data['历史地位'] || data['建筑特色'] || data['建筑风格'] || data['文化价值']) && (data['历史地位'] !== '详见下文' || data['建筑特色'] !== '详见下文' || data['建筑风格'] !== '详见下文' || data['文化价值'] !== '详见下文') ? `
              <div className="space-y-4">
                ${data['历史地位'] && data['历史地位'] !== '详见下文' ? `<InfoRow label="历史地位" value={\`${data['历史地位'].replace(/`/g, '\\`')}\`} />` : ''}
                ${data['建筑特色'] && data['建筑特色'] !== '详见下文' ? `<InfoRow label="建筑特色" value={\`${data['建筑特色'].replace(/`/g, '\\`')}\`} />` : ''}
                ${data['建筑风格'] && data['建筑风格'] !== '详见下文' ? `<InfoRow label="建筑风格" value={\`${data['建筑风格'].replace(/`/g, '\\`')}\`} />` : ''}
                ${data['文化价值'] && data['文化价值'] !== '详见下文' ? `<InfoRow label="文化价值" value={\`${data['文化价值'].replace(/`/g, '\\`')}\`} />` : ''}
              </div>` : ''}
            </div>
            ${(data['开放时间'] || data['门票价格'] || data['地址'] || data['交通方式']) ? `
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={\`${(data['开放时间'] || '全天开放').replace(/`/g, '\\`')}\`} />
              <InfoRow label="门票价格" value={\`${(data['门票价格'] || '免费').replace(/`/g, '\\`')}\`} />
              <InfoRow label="地址" value={\`${(data['地址'] || '请参考地图导航').replace(/`/g, '\\`')}\`} />
              <InfoRow label="交通方式" value={\`${(data['交通方式'] || '建议步行或公共交通').replace(/`/g, '\\`')}\`} />
            </div>` : ''}
          </Section>\n`;
    }

    // 3. 历史背景 / 城市起源
    if (data['历史背景'] || data['城市起源']) {
      sectionsHtml += `
          <Section title="${sectionIndex++}. ${data['城市起源'] ? '城市/景点起源' : '历史背景'}">
            <div className="space-y-4 text-gray-700 leading-relaxed">
${formatParagraphs(data['城市起源'] || data['历史背景'])}
            </div>
          </Section>\n`;
    }

    // 3.1 历史印记 (历史页专属)
    if (data['历史印记']) {
      sectionsHtml += `
          <Section title="${sectionIndex++}. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
${formatParagraphs(data['历史印记'])}
            </div>
          </Section>\n`;
    }

    // 3.2 名人传奇 (历史页专属)
    if (data['名人传奇']) {
      sectionsHtml += `
          <Section title="${sectionIndex++}. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
${formatParagraphs(data['名人传奇'])}
            </div>
          </Section>\n`;
    }

    // 3.3 民间传说与人文风情 (历史页专属)
    if (data['民间传说']) {
      sectionsHtml += `
          <Section title="${sectionIndex++}. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
${formatParagraphs(data['民间传说'])}
            </div>
          </Section>\n`;
    }

    // 3.4 历史回响 (历史页专属)
    if (data['历史回响']) {
      sectionsHtml += `
          <Section title="${sectionIndex++}. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
${formatParagraphs(data['历史回响'])}
            </div>
          </Section>\n`;
    }

    // 4. 游览路线
    if (data['游览路线总述'] || data['游览路线步骤']) {
      const routeTitle = data['SEO路线标题'] || '游览路线';
      sectionsHtml += `
          <Section title={\`${sectionIndex++}. ${routeTitle.replace(/`/g, '\\`')}\`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{\`${(data['SEO路线子标题'] || '推荐路线').replace(/`/g, '\\`')}\`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {\`${(data['游览路线总述'] || '').replace(/`/g, '\\`')}\`}
                </p>
                ${data['游览路线补充'] ? `<div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{\`${data['游览路线补充'].replace(/`/g, '\\`')}\`}
                </div>` : ''}
              </div>
              ${data['游览路线步骤'] ? `
              <div className="grid md:grid-cols-2 gap-6">
${formatListToCards(data['游览路线步骤'])}
              </div>` : ''}
            </div>
          </Section>\n`;
    }

    // 5. 必看亮点细节 (兼容新 Prompt)
    if (data['必看亮点细节']) {
      sectionsHtml += `
          <Section title="${sectionIndex++}. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
${formatParagraphs(data['必看亮点细节'])}
            </div>
          </Section>\n`;
    }

    // 6. 拍照机位 (兼容老 Prompt)
    if (data['拍照机位']) {
      sectionsHtml += `
          <Section title="${sectionIndex++}. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
${formatListToPhotoCards(data['拍照机位'])}
            </div>
            ${data['拍照补充说明'] ? `
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
${formatList(data['拍照补充说明'], true)}
              </ul>
            </div>` : ''}
          </Section>\n`;
    }

    // 7. 实用避坑指南 (兼容新 Prompt)
    if (data['实用避坑指南']) {
      const tipsTitle = data['SEO避坑标题'] || '实用避坑指南';
      sectionsHtml += `
          <Section title={\`${sectionIndex++}. ${tipsTitle.replace(/`/g, '\\`')}\`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
${formatParagraphs(data['实用避坑指南'])}
            </div>
          </Section>\n`;
    }

    // 8. 住宿小贴士 / 住宿与餐饮推荐
    if (data['住宿建议'] || data['住宿与餐饮推荐']) {
      const stayTitle = data['SEO住宿标题'] || '住宿与餐饮推荐';
      sectionsHtml += `
          <Section title={\`${sectionIndex++}. ${stayTitle.replace(/`/g, '\\`')}\`}>
            <div className="space-y-6">
              ${data['住宿建议'] ? `
              <div className="grid md:grid-cols-3 gap-4">
${formatListToHotelCards(data['住宿建议'])}
              </div>` : ''}
              <div className="text-gray-700 leading-relaxed">
${formatParagraphs(data['住宿补充说明'] || data['住宿与餐饮推荐'])}
              </div>
            </div>
          </Section>\n`;
    }

    // 9. 周边延伸探索 (兼容新 Prompt)
    if (data['周边延伸探索']) {
      sectionsHtml += `
          <Section title="${sectionIndex++}. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
${formatParagraphs(data['周边延伸探索'])}
            </div>
          </Section>\n`;
    }

    // 10. 历史冷知识与问答 (FAQ)
    if (data['历史冷知识与问答']) {
      sectionsHtml += `
          <Section title="${sectionIndex++}. 历史冷知识与问答 (FAQ)">
            <div className="space-y-4">
              <div className="bg-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
${formatParagraphs(data['历史冷知识与问答'])}
              </div>
            </div>
          </Section>\n`;
    }

    // 11. 总结感悟
    if (data['总结感悟']) {
      sectionsHtml += `
          <Section title="${sectionIndex++}. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
${formatParagraphs(data['总结感悟'])}
            </div>
          </Section>\n`;
    }

    // 检查是否有传入的国家slug作为参数
    const existingIndex = attractionsData.findIndex(a => a.slug === slug);
    let countrySlug = 'europe';
    if (existingIndex >= 0 && attractionsData[existingIndex].countrySlug) {
      countrySlug = attractionsData[existingIndex].countrySlug;
    } else {
      const lowerCountry = (data['国家'] || 'europe').toLowerCase();
      countrySlug = lowerCountry === '法国' ? 'france' : lowerCountry === '意大利' ? 'italy' : 'europe';
    }

    // Regex to match the second item in Breadcrumb
    const breadcrumbRegex = /(<Breadcrumb\s+items=\{\[\s*\{\s*label:\s*'首页',\s*href:\s*'\/'\s*\},)(\s*\{\s*label:\s*'[^']+',\s*href:\s*'\/[^']+'\s*\},)/;
    
    // 如果生成的是面包屑，我们在模板中直接使用 destinations
    // 之前模板中写死了 category，我们这里把它改掉
    
    const pageContent = `import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '${safeTitle}',
  description: '${safeDesc}',
}

export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '${cat.displayName}', href: '/category/${cat.id}' },
            { label: '${data['国家'] || '欧洲'}', href: '/destinations/${countrySlug}' },
${data['城市'] ? `            { label: '${data['城市'].replace(/'/g, "\\'")}', href: '/destinations/${countrySlug}' },` : ''}
            { label: '${(data['景点中文名'] || '').replace(/'/g, "\\'")}', href: '/attractions/${slug}' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{\`${data['景点中文名'] || ''}・${data['景点英文名'] || ''}・${data['国家'] || ''}・${data['城市'] || ''}\`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {\`${(data['核心简介']?.split('\\n')[0] || '').replace(/`/g, '\\`')}\`}
          </p>
        </div>

        <div className="space-y-8">
${sectionsHtml}
${relatedHtml}
        </div>
      </div>
    </div>
  )
}
`;;

    // 写入数据源文件，替代独立 page.tsx 页面文件
    let writeNeeded = true;
    const pageData = parsePageTsx(pageContent, slug);
    const nextContentJson = JSON.stringify(pageData, null, 2);
    if (fs.existsSync(contentFile)) {
      const oldContent = fs.readFileSync(contentFile, 'utf-8');
      if (oldContent === nextContentJson) {
        writeNeeded = false;
      }
    }
    
    if (writeNeeded) {
      writePageData(rootDir, pageData);
    }

    if (fs.existsSync(pageFile)) {
      fs.unlinkSync(pageFile);
    }

    // 更新 JSON，合并或新增分类
    // 注意：如果是游记或历史，它们会作为独立的一条记录存在于 JSON 中，所以用独立的 slug 查找
    // existingIndex 已经在上方检查 countrySlug 时定义过，无需重新声明
    let categoryArray = [cat.id]; // 当前文案所属文件夹的分类
    
    if (existingIndex >= 0 && attractionsData[existingIndex].category) {
      const existingCategories = Array.isArray(attractionsData[existingIndex].category) 
        ? attractionsData[existingIndex].category 
        : [attractionsData[existingIndex].category];
      categoryArray = Array.from(new Set([...existingCategories, cat.id]));
    }

    const newEntry = {
      name: data['景点中文名'],
      englishName: data['景点英文名'] || '',
      country: data['国家'] || '',
      city: data['城市'] || '',
      slug: slug,
      description: (data['核心简介'] || data['导语'] || '').substring(0, 150).replace(/\\n/g, ' '),
      address: data['地址'] || '',
      transport: data['交通方式'] || '',
      region: data['国家'] || '',
      type: data['类型'] || '古城',
      category: categoryArray
    };

    // 保留原有的国家Slug数据，避免被清空
    if (existingIndex >= 0) {
      if (attractionsData[existingIndex].countrySlug) {
        newEntry.countrySlug = attractionsData[existingIndex].countrySlug;
      }
      attractionsData[existingIndex] = { ...attractionsData[existingIndex], ...newEntry };
      totalSuccessCount++;
      console.log(`  🔄 成功覆盖: [${data['景点中文名']}] (${slug}) -> 更新 [${cat.displayName}] 分类`);
    } else {
      // 简单映射一下基础国家，不严谨但作为降级处理
      const lowerCountry = (data['国家'] || 'europe').toLowerCase();
      newEntry.countrySlug = lowerCountry === '法国' ? 'france' : lowerCountry === '意大利' ? 'italy' : 'europe';
      attractionsData.push(newEntry);
      totalSuccessCount++;
      console.log(`  ✅ 成功生成: [${data['景点中文名']}] (${slug}) -> 归入 [${cat.displayName}] 分类`);
    }

    // 生成成功后，自动删除原文本文件
    fs.unlinkSync(filePath);
  });
});

// 提取共用的日志输出逻辑
function printSummary() {
  console.log(`\n=========================================`);
  console.log(`🎉 批量处理完成！`);
  console.log(`✅ 新增或更新了 ${totalSuccessCount} 个景点页面`);
  console.log(`⏩ 智能跳过了 ${totalSkippedCount} 个已存在的文件`);
  console.log(`=========================================\n`);
}

// 如果有任何修改，则保存更新后的 JSON
if (totalSuccessCount > 0) {
  fs.writeFileSync(jsonFile, JSON.stringify(attractionsData, null, 2), 'utf-8');
  
  // ==============================
  // 自动生成 sitemap.xml
  // ==============================
  const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
  const baseUrl = 'https://www.besteuropeanspots.com';
  const currentDate = new Date().toISOString().split('T')[0];

  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemapContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // 首页
  sitemapContent += `  <url>\n    <loc>${baseUrl}/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;

  // 所有分类页
  const allCategories = ['encyclopedia', 'travelogue', 'history'];
  allCategories.forEach(c => {
    sitemapContent += `  <url>\n    <loc>${baseUrl}/category/${c}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  });

  // 只把真实存在数据源的页面加入 sitemap
  let validPagesCount = 0;
  attractionsData.forEach(a => {
    const attractionContentFile = getContentFilePath(rootDir, a.slug);
    if (fs.existsSync(attractionContentFile)) {
      sitemapContent += `  <url>\n    <loc>${baseUrl}/attractions/${a.slug}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
      validPagesCount++;
    }
  });

  sitemapContent += `</urlset>`;

  const publicDir = path.join(rootDir, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');
  console.log(`\n🗺️  已自动更新站点地图：sitemap.xml (共包含 ${validPagesCount + 4} 个页面，其中景点 ${validPagesCount} 个)`);
  
  printSummary();
} else {
  // 即使没有生成任何新页面，也应该打印跳过的数量
  printSummary();
}
