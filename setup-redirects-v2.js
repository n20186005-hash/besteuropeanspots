const fs = require('fs');
const path = require('path');

const vercelJsonPath = path.join(__dirname, 'vercel.json');
let vercelConfig = { redirects: [] };
if (fs.existsSync(vercelJsonPath)) {
  vercelConfig = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf8'));
  if (!vercelConfig.redirects) vercelConfig.redirects = [];
}

const newRedirects = [
  { source: '/destinations/bosnia(/?)', destination: '/destinations/bosnia-and-herzegovina', permanent: true },
  { source: '/destinations/bohei(/?)', destination: '/destinations/bosnia-and-herzegovina', permanent: true },
  { source: '/destinations/saipulusi(/?)', destination: '/destinations/cyprus', permanent: true }
];

let addedCount = 0;
newRedirects.forEach(newRedirect => {
  const exists = vercelConfig.redirects.some(r => r.source === newRedirect.source);
  if (!exists) {
    vercelConfig.redirects.push(newRedirect);
    addedCount++;
  }
});

fs.writeFileSync(vercelJsonPath, JSON.stringify(vercelConfig, null, 2), 'utf8');
console.log(`Added ${addedCount} new redirects to vercel.json.`);