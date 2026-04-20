const fs = require('fs');
const path = require('path');

const attractionsDir = path.join(__dirname, 'src', 'app', 'attractions');
const attractionsDataPath = path.join(__dirname, 'src', 'data', 'attractions.json');

let attractions = [];
if (fs.existsSync(attractionsDataPath)) {
  attractions = JSON.parse(fs.readFileSync(attractionsDataPath, 'utf8'));
}

const getCategoryInfo = (slug) => {
  const attraction = attractions.find(a => a.slug === slug);
  if (!attraction || !attraction.category || attraction.category.length === 0) {
    return null;
  }
  const catId = attraction.category[0];
  let catName = '景点';
  if (catId === 'encyclopedia') catName = '景点百科';
  else if (catId === 'travelogue') catName = '景点游记';
  else if (catId === 'history') catName = '历史人文';
  return { id: catId, name: catName };
};

function patchFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const slugMatch = filePath.match(/attractions[\\\/]([^\\\/]+)[\\\/]page\.tsx$/);
  if (!slugMatch) return;
  const slug = slugMatch[1];

  const catInfo = getCategoryInfo(slug);
  if (catInfo) {
    const oldBreadcrumb = "{ label: '景点', href: '/attractions' }";
    const newBreadcrumb = `{ label: '${catInfo.name}', href: '/category/${catInfo.id}' }`;
    if (content.includes(oldBreadcrumb)) {
      content = content.replace(oldBreadcrumb, newBreadcrumb);
      changed = true;
    }
  }

  // Use a string replace that's simpler for "详见下文"
  const oldText = `<div className="space-y-4">
                <InfoRow label="历史地位" value={\`详见下文\`} />
                <InfoRow label="建筑特色" value={\`详见下文\`} />
                <InfoRow label="建筑风格" value={\`详见下文\`} />
                <InfoRow label="文化价值" value={\`详见下文\`} />
              </div>`;
  
  if (content.includes(oldText)) {
    content = content.replace(oldText, '');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function run() {
  const folders = fs.readdirSync(attractionsDir);
  let count = 0;
  folders.forEach(folder => {
    const filePath = path.join(attractionsDir, folder, 'page.tsx');
    if (fs.existsSync(filePath)) {
      patchFile(filePath);
      count++;
    }
  });
  console.log(`Checked ${count} files, patched successfully.`);
}

run();
