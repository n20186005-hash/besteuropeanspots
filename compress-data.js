const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const dir = path.join(__dirname, 'src', 'data', 'attraction-pages');

console.log('Starting compression...');
const files = fs.readdirSync(dir);
let count = 0;

for (const file of files) {
  if (file.endsWith('.json')) {
    const filePath = path.join(dir, file);
    const gzFilePath = path.join(dir, file + '.gz');
    
    const content = fs.readFileSync(filePath);
    const zipped = zlib.gzipSync(content);
    
    fs.writeFileSync(gzFilePath, zipped);
    fs.unlinkSync(filePath); // delete original
    
    count++;
    if (count % 1000 === 0) {
      console.log(`Compressed ${count} files...`);
    }
  }
}

console.log(`Finished compressing ${count} files.`);
