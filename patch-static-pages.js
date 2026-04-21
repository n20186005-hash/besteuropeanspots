const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.join(__dirname, 'src/app/attractions'),
  path.join(__dirname, 'src/app/history'),
  path.join(__dirname, 'src/app/travelogue')
];

const replacements = [
  // Bosnia and Herzegovina
  { regex: /波斯尼亚和黑塞哥维那（波黑）/g, replacement: '波斯尼亚和黑塞哥维那' },
  { regex: /波黑（波斯尼亚和黑塞哥维那）/g, replacement: '波斯尼亚和黑塞哥维那' },
  { regex: /波黑(?![（\(])/g, replacement: '波斯尼亚和黑塞哥维那' }, // Match "波黑" not followed by parenthesis

  // Cyprus
  { regex: /塞浦路斯（事实上由北塞浦路斯土耳其共和国控制）/g, replacement: '塞浦路斯和土耳其' },

  // Cross-border
  { regex: /塞尔维亚\s*[&＆]\s*罗马尼亚/g, replacement: '塞尔维亚和罗马尼亚' },
  { regex: /西班牙[，,]\s*葡萄牙/g, replacement: '西班牙和葡萄牙' },
  { regex: /比利时\s*[\/／]\s*荷兰/g, replacement: '比利时和荷兰' }
];

let filesPatched = 0;
let filesChecked = 0;

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      checkAndPatchFile(fullPath);
    }
  }
}

function checkAndPatchFile(filePath) {
  filesChecked++;
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const rule of replacements) {
    content = content.replace(rule.regex, rule.replacement);
  }

  // Also replace '波斯尼亚和黑塞哥维那' label in Breadcrumb if it was just '波黑'
  // The regex above for '波黑' should handle { label: '波黑', href: ... } -> { label: '波斯尼亚和黑塞哥维那', href: ... }
  // but it will also change the href if it contained '波黑' but hrefs are in english mostly (bosnia-and-herzegovina)
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesPatched++;
    console.log(`Patched: ${filePath}`);
  }
}

targetDirs.forEach(walkDir);

console.log(`\nDone! Checked ${filesChecked} files, Patched ${filesPatched} files.`);
