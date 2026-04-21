const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
const attractions = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

let enc = 0;
let hist = 0;
let trav = 0;
let multi = 0;

attractions.forEach(a => {
  const c = a.category || [];
  if (c.includes('encyclopedia')) enc++;
  if (c.includes('history')) hist++;
  if (c.includes('travelogue')) trav++;
  if (c.length > 1) multi++;
});

console.log(`Encyclopedia: ${enc}`);
console.log(`History: ${hist}`);
console.log(`Travelogue: ${trav}`);
console.log(`Multi-category: ${multi}`);
