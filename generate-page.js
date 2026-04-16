const fs = require('fs');
const path = require('path');

// 1. 读取输入的文本数据
const inputFile = path.join(__dirname, 'input.txt');
if (!fs.existsSync(inputFile)) {
  console.error('❌ 找不到 input.txt，请在项目根目录创建该文件并填入景点数据。');
  process.exit(1);
}

const rawText = fs.readFileSync(inputFile, 'utf-8');

// 2. 解析文本，转换为键值对对象
function parseText(text) {
  const data = {};
  const lines = text.split('\n');
  let currentKey = '';
  let currentValue = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    // 忽略空行
    if (!line) continue;
    // 匹配类似 "【景点中文名】" 这样的标题行
    const match = line.match(/^【(.+)】$/);
    
    if (match) {
      // 保存上一段内容
      if (currentKey) {
        data[currentKey] = currentValue.join('\n');
      }
      currentKey = match[1];
      currentValue = [];
    } else if (currentKey) {
      // 过滤掉 markdown 的标题符号 #
      currentValue.push(line.replace(/^#+\s*/, ''));
    }
  }
  // 保存最后一段内容
  if (currentKey) {
    data[currentKey] = currentValue.join('\n');
  }
  return data;
}

const data = parseText(rawText);

// 必填字段校验
const requiredKeys = ['景点中文名', '景点英文名', '路由缩写(slug)', '国家', '城市', '类型'];
for (const key of requiredKeys) {
  if (!data[key]) {
    console.error(`❌ 缺少必填字段: 【${key}】`);
    process.exit(1);
  }
}

const slug = data['路由缩写(slug)'].toLowerCase().replace(/[^a-z0-9-]/g, '-');

// 3. 将段落文本转换为 React 组件的段落标签
function formatParagraphs(text) {
  if (!text) return '';
  return text.split('\n')
    .filter(p => p.trim())
    .map(p => `              <p className="text-gray-700 leading-relaxed mb-4">${p}</p>`)
    .join('\n');
}

// 将列表文本转换为 React 的 li 标签
function formatList(text) {
  if (!text) return '';
  return text.split('\n')
    .filter(p => p.trim())
    .map(p => `              <li className="text-gray-700 leading-relaxed mb-2">${p}</li>`)
    .join('\n');
}

// 4. 生成 Next.js 页面组件代码
const pageContent = `import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '${data['SEO标题'] || `${data['景点中文名']} ${data['景点英文名']} - 最佳欧洲景点`}',
  description: '${(data['核心简介'] || '').substring(0, 150).replace(/\n/g, ' ')}...',
}

export default function ${slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')}Page() {
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
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">${data['国家']}</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">${data['城市']}</span>
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

// 5. 写入页面文件
const pageDir = path.join(__dirname, 'src', 'app', 'attractions', slug);
if (!fs.existsSync(pageDir)) {
  fs.mkdirSync(pageDir, { recursive: true });
}
const pageFile = path.join(pageDir, 'page.tsx');
fs.writeFileSync(pageFile, pageContent, 'utf-8');
console.log(`✅ 页面生成成功: ${pageFile}`);

// 6. 更新 JSON 数据源
const jsonFile = path.join(__dirname, 'src', 'data', 'attractions.json');
if (fs.existsSync(jsonFile)) {
  const jsonRaw = fs.readFileSync(jsonFile, 'utf-8');
  let attractions = JSON.parse(jsonRaw);
  
  // 检查是否已存在
  const existingIndex = attractions.findIndex(a => a.slug === slug);
  const newEntry = {
    name: data['景点中文名'],
    englishName: data['景点英文名'],
    country: data['国家'],
    city: data['城市'],
    slug: slug,
    description: (data['核心简介'] || '').substring(0, 150).replace(/\n/g, ' '),
    address: data['地址'] || '',
    transport: data['交通方式'] || '',
    region: data['国家'],
    type: data['类型'] || '古城'
  };

  if (existingIndex >= 0) {
    attractions[existingIndex] = { ...attractions[existingIndex], ...newEntry };
    console.log(`🔄 更新了已存在的 JSON 条目: ${slug}`);
  } else {
    attractions.push(newEntry);
    console.log(`➕ 新增了 JSON 条目: ${slug}`);
  }

  fs.writeFileSync(jsonFile, JSON.stringify(attractions, null, 2), 'utf-8');
  console.log(`✅ 成功更新首页数据: ${jsonFile}`);
}

console.log('\n🎉 所有操作完成！你现在可以运行 npm run dev 预览页面了。');