const fs = require('fs');
const path = require('path');

const homepage = process.argv[2] || '';
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = require(packageJsonPath);

packageJson.homepage = homepage;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
