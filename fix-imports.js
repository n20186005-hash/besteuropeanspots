const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      // Update import
      if (content.includes('import { attractions') && content.includes('@/lib/attractions')) {
        content = content.replace(/import\s+\{([^}]*?)attractions([^}]*?)\}\s+from\s+["']@\/lib\/attractions["']/, 'import {$1getAttractions$2} from "@/lib/attractions"');
        content = content.replace(/import\s+\{([^}]*?)getAttractions,\s*getAttractions([^}]*?)\}/g, 'import {$1getAttractions$2}'); // handle duplicates
        changed = true;
      }

      // Update usage
      if (changed || content.includes('attractions.')) {
        // Careful not to replace inside imports or if it's already getAttractions()
        // Replace `attractions.filter` -> `getAttractions().filter` etc
        // Replace `attractions.map` -> `getAttractions().map`
        // Let's just do a regex replace
        const originalContent = content;
        content = content.replace(/\battractions\./g, 'getAttractions().');
        if (content !== originalContent) changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated', fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'src', 'app'));
processDir(path.join(__dirname, 'src', 'components'));
