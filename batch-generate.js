const fs = require('fs');
const path = require('path');

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
function parseText(text) {
  const data = {};
  const lines = text.split('\n');
  let currentKey = '';
  let currentValue = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const match = line.match(/^【(.+)】$/);
    
    if (match) {
      if (currentKey) {
        data[currentKey] = currentValue.join('\n');
      }
      currentKey = match[1];
      currentValue = [];
    } else if (currentKey) {
      currentValue.push(line.replace(/^#+\s*/, ''));
    }
  }
  if (currentKey) {
    data[currentKey] = currentValue.join('\n');
  }
  return data;
}

function formatParagraphs(text) {
  if (!text) return '';
  return text.split('\n')
    .filter(p => p.trim())
    .map(p => `              <p className="text-gray-700 leading-relaxed mb-4">${p}</p>`)
    .join('\n');
}

function formatList(text) {
  if (!text) return '';
  return text.split('\n')
    .filter(p => p.trim())
    .map(p => `              <li className="text-gray-700 leading-relaxed mb-2">${p}</li>`)
    .join('\n');
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

    const slug = data['路由缩写(slug)'].toLowerCase().replace(/[^a-z0-9-]/g, '-');
    const pageDir = path.join(attractionsDir, slug);
    const pageFile = path.join(pageDir, 'page.tsx');

    // 【防重复检查】如果页面文件已经存在，则跳过
    if (fs.existsSync(pageFile)) {
      console.log(`  ⏩ 跳过: [${data['景点中文名']}] (${slug}) 已存在，无需重复生成。`);
      totalSkippedCount++;
      return;
    }

    const componentName = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('') + 'Page';

    const pageContent = `import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '${data['SEO标题'] || `${data['景点中文名']} ${data['景点英文名']} - 最佳欧洲景点`}',
  description: '${(data['核心简介'] || '').substring(0, 150).replace(/\\n/g, ' ')}...',
}

export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '${data['景点中文名']}', href: '/attractions/${slug}' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">${data['景点中文名']}</h1>
          <p className="text-xl text-gray-600 mb-4">${data['景点英文名']}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">${data['国家'] || ''}</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">${data['城市'] || ''}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
${formatParagraphs(data['核心简介'])}
            </Section>
            
            <Section title="基本信息">
${formatParagraphs(data['基本信息详细描述'])}
            </Section>

            <Section title="历史背景">
${formatParagraphs(data['历史背景'])}
            </Section>

            <Section title="游览路线">
${formatParagraphs(data['游览路线总述'])}
              <ul className="list-disc pl-5 space-y-2 mb-4">
${formatList(data['游览路线步骤'])}
              </ul>
${formatParagraphs(data['游览路线补充'])}
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
${formatList(data['拍照机位'])}
              </ul>
${formatParagraphs(data['拍照补充说明'])}
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
${formatList(data['住宿建议'])}
              </ul>
${formatParagraphs(data['住宿补充说明'])}
            </Section>

            <Section title="总结感悟">
${formatParagraphs(data['总结感悟'])}
            </Section>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600 text-center">
                本文由旅行作者 Winter Grady 实地走访整理，专注欧洲小众景点深度攻略，持续分享真实游览体验。
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                本站内容仅供旅行参考使用，商务合作与转载事宜请通过联系页脚提交申请。
              </p>
              <p className="text-xs text-gray-500 text-center">
                管理团队保留所有内容版权，未经许可禁止搬运、摘抄或商用。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">实用信息</h3>
              <div className="space-y-4">
                <InfoRow icon="🕒" label="开放时间" value="${data['开放时间'] || '全天开放'}" />
                <InfoRow icon="🎫" label="门票" value="${data['门票价格'] || '免费'}" />
                <InfoRow icon="📍" label="地址" value="${data['地址'] || '请参考地图导航'}" />
                <InfoRow icon="🚌" label="交通" value="${data['交通方式'] || '建议步行或公共交通'}" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
`;

    // 写入文件
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    fs.writeFileSync(pageFile, pageContent, 'utf-8');

    // 更新 JSON，合并或新增分类
    const existingIndex = attractionsData.findIndex(a => a.slug === slug);
    let categoryArray = [cat.id]; // 当前文案所属文件夹的分类
    
    if (existingIndex >= 0 && Array.isArray(attractionsData[existingIndex].category)) {
      categoryArray = Array.from(new Set([...attractionsData[existingIndex].category, cat.id]));
    }

    const newEntry = {
      name: data['景点中文名'],
      englishName: data['景点英文名'] || '',
      country: data['国家'] || '',
      city: data['城市'] || '',
      slug: slug,
      description: (data['核心简介'] || '').substring(0, 150).replace(/\\n/g, ' '),
      address: data['地址'] || '',
      transport: data['交通方式'] || '',
      region: data['国家'] || '',
      type: data['类型'] || '古城',
      category: categoryArray
    };

    if (existingIndex >= 0) {
      attractionsData[existingIndex] = { ...attractionsData[existingIndex], ...newEntry };
    } else {
      attractionsData.push(newEntry);
    }

    totalSuccessCount++;
    console.log(`  ✅ 成功生成: [${data['景点中文名']}] -> 归入 [${cat.displayName}] 分类`);
    
    // 生成成功后，自动删除原文本文件
    fs.unlinkSync(filePath);
  });
});

// 如果有任何修改，则保存更新后的 JSON
if (totalSuccessCount > 0) {
  fs.writeFileSync(jsonFile, JSON.stringify(attractionsData, null, 2), 'utf-8');
}

console.log(`\n=========================================`);
console.log(`🎉 批量处理完成！`);
console.log(`✅ 新增生成了 ${totalSuccessCount} 个景点页面`);
console.log(`⏩ 智能跳过了 ${totalSkippedCount} 个已存在的文件`);
console.log(`=========================================\n`);