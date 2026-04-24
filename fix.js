const fs = require('fs');

// Read file
let content = fs.readFileSync('batch-generate.js', 'utf8');

// Find and replace the problematic line 524
// The issue is: .replace(/`/g, '\\`')
const lines = content.split('\n');

// Replace line 524
lines[523] = `          <h1 className="text-4xl font-bold text-gray-900 mb-4">{\`\${(data['景点中文名'] || '').replace(/\\n/g, ' ')}・\${(data['景点英文名'] || '').replace(/\\n/g, ' ')}・\${(data['国家'] || '').replace(/\\n/g, ' ')}・\${(data['城市'] || '').replace(/\\n/g, ' ')}\`}</h1>`;

// Replace line 526
lines[525] = `            {\`\${(data['核心简介']?.split('\\n')[0] || '').replace(/\\n/g, ' ')}\`}`;

content = lines.join('\n');

// Write back
fs.writeFileSync('batch-generate.js', content, 'utf8');
console.log('Fixed batch-generate.js');
