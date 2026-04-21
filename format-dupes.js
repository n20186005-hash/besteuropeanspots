const fs = require('fs');
const path = require('path');

const dupesPath = path.join(__dirname, 'dupes-result.json');
const dupes = JSON.parse(fs.readFileSync(dupesPath, 'utf8'));

// Format the output
let message = '经过检测，我发现你的 JSON 库中确实存在以下重复或高度相似的景点内容。以下是具体的重复列表，你可以根据这个列表进行清理或合并：\n\n';

dupes.forEach(group => {
  message += `**${group.kw}**\n`;
  group.matches.forEach(match => {
    message += `- [${match.name}](${match.url})\n`;
  });
  message += '\n';
});

console.log(message);