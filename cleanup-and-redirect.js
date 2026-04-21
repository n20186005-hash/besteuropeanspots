const fs = require('fs');
const path = require('path');

const attractionsDataPath = path.join(__dirname, 'src', 'data', 'attractions.json');
const attractionsDir = path.join(__dirname, 'src', 'app', 'attractions');
const vercelJsonPath = path.join(__dirname, 'vercel.json');

const redirectsMap = {
  "albi-cathedral": "episcopal-city-of-albi",
  "conques-abbey": "conques-abbey-village",
  "abbey-of-sainte-foy-conques": "conques-abbey-village",
  "dinan-old-town": "dinan-medieval-town",
  "citadel-of-dinant": "dinant-saxophone-town-belgium",
  "rocamadour-cliff-village": "rocamadour-sanctuary",
  "riquewihr-alsace-france": "riquewihr-alsace-fairytale-village",
  "gjirokastra-castle-old-town": "gjirokaster-city",
  "roussillon": "roussillon-ochre-village",
  "provins-medieval-city": "provins-medieval-town",
  "durbuy-town": "durbuy-smallest-city-belgium",
  "echternach-abbey": "abbey-of-echternach",
  "quedlinburg-abbey": "quedlinburg-old-town",
  "trier-cathedral": "trier-roman-monuments",
  "trier-amphitheater": "trier-roman-monuments",
  "noerdlingen-ries-crater-town": "nordlingen-ries-crater-town",
  "meersburg-castle-old-castle": "meersburg-old-town",
  "celle-half-timbered-houses": "celle-half-timbered-town",
  "volterra-etruscan-ruins": "volterra-old-town",
  "lecce-baroque-city": "lecce-baroque-old-town",
  "mantua": "mantua-old-town",
  "mantua-city": "mantua-old-town",
  "ravenna-mosaics": "ravenna-byzantine-mosaics",
  "historic-centre-urbino": "urbino-historic-centre",
  "ferrara-castle": "ferrara-renaissance-city",
  "ascoli-piceno": "ascoli-piceno-historic-center",
  "spoleto": "spoleto-old-town",
  "spoleto-historic-town": "spoleto-old-town",
  "spoleto-aqueduct-and-duomo-complex": "spoleto-old-town",
  "spoleto-umbria": "spoleto-old-town",
  "casas-colgadas-cuenca": "cuenca-hanging-houses",
  "avila-city-walls": "avila-old-town",
  "avila-walls": "avila-old-town",
  "san-vicente-avila": "avila-old-town",
  "historic-centre-guimaraes": "guimaraes-historical-centre",
  "evora-roman-temple": "evora-bone-chapel-historic-centre",
  "obidos-portugal": "obidos-wedding-town-portugal",
  "duernstein-abbey-wachau": "durnstein-castle",
  "schlossberg-graz": "graz-old-town",
  "schwabisch-hall": "schwabisch-hall-old-town",
  "schwaebisch-hall": "schwabisch-hall-old-town",
  "schwaebisch-hall-old-town": "schwabisch-hall-old-town",
  "hall-in-tirol": "hall-in-tirol-mint-town",
  "bad-ischl": "bad-ischl-imperial-spa-town",
  "imperial-spa-town-bad-ischl": "bad-ischl-imperial-spa-town",
  "st-gallen-abbey": "abbey-of-saint-gall-library",
  "abbey-library-saint-gall": "abbey-of-saint-gall-library",
  "thun-castle": "thun-castle-old-town",
  "sion": "sion-twin-hills",
  "sion-valais-switzerland": "sion-twin-hills",
  "murten-medieval-ramparts": "murten-medieval-lake-city-walls",
  "murten-old-town-walls": "murten-medieval-lake-city-walls",
  "telc-water-castle": "telc-historic-centre",
  "sedlec-ossuary-kutna-hora": "sedlec-ossuary-kutna-hora-old-town",
  "spis-castle-slovakia": "spis-castle",
  "gyor": "gyor-baroque-old-town",
  "gyor-old-town": "gyor-baroque-old-town",
  "eger-castle": "eger-castle-bulls-blood-wine-region",
  "eger-minaret": "eger-castle-bulls-blood-wine-region",
  "szentendre-artists-village": "szentendre-art-town-hungary",
  "tokaj-wine-region-historic-cultural-landscape": "tokaj-wine-region-historical-cultural-landscape",
  "piran-old-town": "piran-salt-pans-old-town",
  "rovinj-old-town-istria": "rovinj-coastal-old-town",
  "trogir-old-town": "trogir-historic-centre",
  "trogir-historic-town": "trogir-historic-centre",
  "korcula": "korcula-old-town-marco-polo",
  "perast-bay-of-kotor": "perast-old-town",
  "ohrid-old-town": "ohrid-lake-and-old-town",
  "roman-theatre-plovdiv": "plovdiv-roman-theatre",
  "sighisoara-citadel": "sighisoara-dracula-historic-centre",
  "berat-albania-thousand-windows": "berat-thousand-windows",
  "nafplio-greece": "nafplio-old-town",
  "monemvasia": "monemvasia-fortress-town",
  "meteora-monasteries": "meteora-monasteries-greece",
  "chania-venetian-harbour": "chania-old-town-venetian-harbor-lighthouse",
  "visby": "visby-city-wall",
  "ystad-medieval-town-sweden": "ystad-half-timbered-town",
  "porvoo": "porvoo-old-town",
  "porvoo-red-wooden-houses": "porvoo-old-town",
  "turku-castle": "turku-castle-sweden-finland",
  "turku-cathedral": "turku-castle-sweden-finland"
};

// 1. Clean up attractions.json
console.log('1. Cleaning up attractions.json...');
let attractions = JSON.parse(fs.readFileSync(attractionsDataPath, 'utf8'));
const originalCount = attractions.length;

attractions = attractions.filter(a => !redirectsMap[a.slug]);

fs.writeFileSync(attractionsDataPath, JSON.stringify(attractions, null, 2), 'utf8');
console.log(`   Removed ${originalCount - attractions.length} duplicate entries. New count: ${attractions.length}`);

// 2. Delete physical folders
console.log('\n2. Deleting physical folders...');
let deletedCount = 0;
Object.keys(redirectsMap).forEach(oldSlug => {
  const folderPath = path.join(attractionsDir, oldSlug);
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    deletedCount++;
  }
});
console.log(`   Deleted ${deletedCount} folders.`);

// 3. Generate vercel.json for redirects
console.log('\n3. Generating vercel.json for 301 redirects...');
const redirectsConfig = [];
Object.entries(redirectsMap).forEach(([oldSlug, newSlug]) => {
  redirectsConfig.push({
    source: `/attractions/${oldSlug}(/?)`,
    destination: `/attractions/${newSlug}`,
    permanent: true
  });
});

let vercelConfig = {};
if (fs.existsSync(vercelJsonPath)) {
  vercelConfig = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf8'));
}

if (!vercelConfig.redirects) {
  vercelConfig.redirects = [];
}

// Append unique redirects
redirectsConfig.forEach(newRedirect => {
  const exists = vercelConfig.redirects.some(r => r.source === newRedirect.source);
  if (!exists) {
    vercelConfig.redirects.push(newRedirect);
  }
});

fs.writeFileSync(vercelJsonPath, JSON.stringify(vercelConfig, null, 2), 'utf8');
console.log(`   Generated/Updated vercel.json with ${redirectsConfig.length} redirects.`);

console.log('\nCleanup and redirect setup complete! 🎉');
