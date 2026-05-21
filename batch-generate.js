const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { normalizeAttractionRecord } = require('./taxonomy-country-utils');

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
    // 支持 【标签】 以及 【标签】内容 两种格式
    const match = line.replace(/\*\*/g, '').match(/^【\s*(.+?)\s*】(.*)$/);
    
    if (match) {
      if (currentKey) {
        data[currentKey] = cleanMarkdown(currentValue.join('\n'));
      }
      currentKey = match[1];
      currentValue = [];
      const inlineValue = match[2].trim();
      if (inlineValue) {
        currentValue.push(inlineValue);
      }
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

// 加载无效国家列表
let invalidCountries = [];
const invalidCountriesPath = path.join(rootDir, 'invalid-countries.json');
if (fs.existsSync(invalidCountriesPath)) {
  invalidCountries = JSON.parse(fs.readFileSync(invalidCountriesPath, 'utf8'));
  if (invalidCountries.length > 0) {
    console.log(`🛡️  已加载无效国家过滤列表，包含 ${invalidCountries.length} 个受限国家`);
  }
}

// 加载允许的国家列表 (白名单)
let allowedCountries = [];
const allowedCountriesPath = path.join(rootDir, 'allowed-countries.json');
if (fs.existsSync(allowedCountriesPath)) {
  allowedCountries = JSON.parse(fs.readFileSync(allowedCountriesPath, 'utf8'));
  if (allowedCountries.length > 0) {
    console.log(`🌍 已加载允许的国家白名单，包含 ${allowedCountries.length} 个国家`);
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

    const slugKey = Object.keys(data).find(k => k.includes('路由缩写') || k.includes('slug'));
    const cnNameKey = Object.keys(data).find(k => k.includes('景点中文名'));
    
    if (!cnNameKey || !slugKey || !data[cnNameKey] || !data[slugKey]) {
      console.log(`  ❌ 跳过: [${file}] - 缺少必填标题！请确保文件内包含【景点中文名】和【路由缩写(slug)】这两个标题。`);
      return;
    }

    // 统一赋值回标准key，方便后续使用
    data['景点中文名'] = data[cnNameKey];
    data['路由缩写(slug)'] = data[slugKey];

    // 国家/分类清洗逻辑
    let country = data['国家'] || '';
    if (country.includes('Scotland') || country.includes('United Kingdom') || country.includes('英国') || country.includes('Powis Castle')) {
      country = '英国';
    } else if (country.includes('Pilsen') || country.includes('捷克')) {
      country = '捷克';
    } else if (country.includes('Vatican') || country.includes('梵蒂冈')) {
      country = '梵蒂冈';
    } else if (country.includes('Bosnia') || country.includes('波黑') || country.includes('波斯尼亚')) {
      country = '波黑';
    }
    
    // 如果白名单存在且当前国家不在白名单中，尝试进一步修正或最终跳过
    if (allowedCountries.length > 0 && !allowedCountries.includes(country)) {
      // 尝试匹配白名单中的国家（部分匹配）
      const matchedCountry = allowedCountries.find(c => country.includes(c));
      if (matchedCountry) {
         country = matchedCountry;
      } else {
         console.log(`  🚫 跳过非白名单国家: [${data['景点中文名']}] 国家为 ${country}，不在允许列表中。`);
         totalSkippedCount++;
         return;
      }
    }
    
    data['国家'] = country;

    // 拦截非欧洲或虚构国家 (作为兜底，虽然白名单已经处理了大部分情况)
    if (invalidCountries.includes(data['国家'])) {
      console.log(`  🚫 跳过无效国家: [${data['景点中文名']}] 国家为 ${data['国家']}，已被过滤。`);
      totalSkippedCount++;
      return;
    }

    // 处理景点英文名中的多余描述（例如：The Inverness Castle Experience｜站在尼斯湖畔的中世纪要塞...）
    let rawEnglishName = data['景点英文名'] || '';
    if (rawEnglishName.includes('｜')) {
      const parts = rawEnglishName.split('｜');
      data['景点英文名'] = parts[0].trim();
      const extraIntro = parts.slice(1).join('｜').trim();
      if (extraIntro) {
        data['核心简介'] = extraIntro + '\n' + (data['核心简介'] || '');
      }
    } else if (rawEnglishName.includes('|')) {
      const parts = rawEnglishName.split('|');
      data['景点英文名'] = parts[0].trim();
      const extraIntro = parts.slice(1).join('|').trim();
      if (extraIntro) {
        data['核心简介'] = extraIntro + '\n' + (data['核心简介'] || '');
      }
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

    const dataDir = path.join(rootDir, 'src', 'data', cat.id);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const jsonOutputFile = path.join(dataDir, `${slug}.json`);

    // 检查是否在永久黑名单中
    if (permanentBlacklist.includes(slug)) {
      console.log(`  🚫 跳过黑名单: [${data['景点中文名']}] (${slug}) 受永久保护，不会生成。`);
      totalSkippedCount++;
      return;
    }

    // 【防重复检查】如果页面文件已经存在，且没有开启强制覆盖，则跳过
    if (!isForceOverwrite && fs.existsSync(jsonOutputFile)) {
      console.log(`  ⏩ 跳过: [${data['景点中文名']}] (${slug}) 已存在，无需重复生成。`);
      totalSkippedCount++;
      return;
    }

    // 对有可能插入到单引号字符串中的字段进行安全转义，防止破坏 TSX 语法
    const safeTitle = (data['SEO标题'] || `${data['景点中文名']}・${data['景点英文名']}・${data['国家']}・${data['城市']} | 最佳欧洲景点`);
    const safeDesc = (data['SEO描述'] || data['核心简介'] || '').substring(0, 150).replace(/\n/g, ' ');

    // 构建结构化 JSON 数据
    const pageData = {
      slug,
      category: cat.id,
      metadata: {
        title: safeTitle,
        description: safeDesc,
      },
      hero: {
        title: [(data['景点中文名'] || ''), (data['景点英文名'] || ''), (data['国家'] || ''), (data['城市'] || '')].filter(Boolean).join('・'),
        description: (data['核心简介'] || '').split('\n')[0] || ''
      },
      content: data,
      relatedAttractions: attractionsData
        .filter(a => a.slug !== slug && (a.country === data['国家'] || a.type === data['类型']))
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
    };

    const jsonString = JSON.stringify(pageData, null, 2);
    const zipped = zlib.gzipSync(jsonString);
    const jsonOutputFileGz = `${jsonOutputFile}.gz`;
    
    fs.writeFileSync(jsonOutputFileGz, zipped);
    // Optional: write raw JSON for local dev, or just keep gz. We'll stick to gz.
    // If the unzipped json file exists, remove it
    if (fs.existsSync(jsonOutputFile)) {
      fs.unlinkSync(jsonOutputFile);
    }

    // 删除旧的 page.tsx 如果存在
    const oldPageDir = path.join(attractionsDir, slug);
    const oldPageFile = path.join(oldPageDir, 'page.tsx');
    if (fs.existsSync(oldPageFile)) {
      fs.unlinkSync(oldPageFile);
      // Try to remove dir if empty
      try { fs.rmdirSync(oldPageDir); } catch(e) {}
    }

    // 更新 JSON，合并或新增分类
    // 注意：如果是游记或历史，它们会作为独立的一条记录存在于 JSON 中，所以用独立的 slug 查找
    const existingIndex = attractionsData.findIndex(a => a.slug === slug);
    let categoryArray = [cat.id]; // 当前文案所属文件夹的分类
    
    if (existingIndex >= 0 && attractionsData[existingIndex].category) {
      const existingCategories = Array.isArray(attractionsData[existingIndex].category) 
        ? attractionsData[existingIndex].category 
        : [attractionsData[existingIndex].category];
      categoryArray = Array.from(new Set([...existingCategories, cat.id]));
    }

    const newEntry = normalizeAttractionRecord({
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
    });

    // 保留原有的国家Slug数据，避免被清空
    if (existingIndex >= 0) {
      if (attractionsData[existingIndex].countrySlug) {
        newEntry.countrySlug = attractionsData[existingIndex].countrySlug;
      }
      attractionsData[existingIndex] = { ...attractionsData[existingIndex], ...newEntry };
      totalSuccessCount++;
      console.log(`  🔄 成功覆盖: [${data['景点中文名']}] (${slug}) -> 更新 [${cat.displayName}] 分类`);
    } else {
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
  
  printSummary();
} else {
  // 即使没有生成任何新页面，也应该打印跳过的数量
  printSummary();
}
