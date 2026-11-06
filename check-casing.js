const fs = require('fs');
const vm = require('vm');
const path = require('path');

const code = fs.readFileSync('js/products-data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

let errors = [];

function checkExactCase(filePath) {
  const parts = filePath.split('/');
  let current = process.cwd();
  for (let part of parts) {
    if (!part) continue;
    const items = fs.readdirSync(current);
    const exactMatch = items.find(item => item === part);
    const caseInsensitiveMatch = items.find(item => item.toLowerCase() === part.toLowerCase());

    if (!exactMatch) {
      if (caseInsensitiveMatch) {
        errors.push({
          requested: filePath,
          part: part,
          actualOnDisk: caseInsensitiveMatch,
          parent: current
        });
      } else {
        errors.push({
          requested: filePath,
          part: part,
          actualOnDisk: 'NOT FOUND AT ALL',
          parent: current
        });
      }
      return false;
    }
    current = path.join(current, exactMatch);
  }
  return true;
}

sandbox.window.PRODUCTS_DATA.forEach(prod => {
  if (prod.image) checkExactCase(prod.image);
  prod.colors.forEach(col => {
    Object.values(col.images || {}).forEach(img => {
      if (img) checkExactCase(img);
    });
  });
});

console.log('Total case mismatch errors:', errors.length);
errors.forEach(e => {
  console.log('Mismatch in: ' + e.requested + ' -> expected part: "' + e.part + '" but on disk is: "' + e.actualOnDisk + '"');
});

