const fs = require('fs');

// 读取文件
let content = fs.readFileSync('batch-generate.js', 'utf8');

// 替换 h1 中的问题代码
const oldCode = `<h1 className="text-4xl font-bold text-gray-900 mb-4">{\`\${(data['景点中文名'] || '').replace(/\\n/g, ' ').replace(/\`/g, '\\\\\`')}・\${(data['景点英文名'] || '').replace(/\\n/g, ' ').replace(/\`/g, '\\\\\`')}・\${(data['国家'] || '').replace(/\\n/g, ' ').replace(/\`/g, '\\\\\`')}・\${(data['城市'] || '').replace(/\\n/g, ' ').replace(/\`/g, '\\\\\`')}\`}</h1>`;

const newCode = `<h1 className="text-4xl font-bold text-gray-900 mb-4">{String((data['景点中文名'] || '')).replace(/\\n/g, ' ')}・{String((data['景点英文名'] || '')).replace(/\\n/g, ' ')}・{String((data['国家'] || '')).replace(/\\n/g, ' ')}・{String((data['城市'] || '')).replace(/\\n/g, ' ')}</h1>`;

content = content.replace(oldCode, newCode);

// 替换 p 中的问题代码
const oldP = `{`\${(data['核心简介']?.split('\\n')[0] || '').replace(/\\n/g, ' ').replace(/\`/g, '\\\\\`')}\`}`;

const newP = `{String((data['核心简介']?.split('\\n')[0] || '')).replace(/\\n/g, ' ')}`;

content = content.replace(oldP, newP);

// 写回文件
fs.writeFileSync('batch-generate.js', content, 'utf8');
console.log('Fixed!');
