const execSync = require('child_process').execSync;
const path = require('path');
const fs = require('fs');
const os = require('os');
const ghpages = require('gh-pages');

if (os.type() === 'Linux') {
  execSync('gatsby build --prefix-paths && cp ./src/CNAME public/ && gh-pages -d public');
} else {
  execSync('gatsby build');
  let src = path.join(__dirname, 'src', 'CNAME');
  let dest = path.join(__dirname, 'public', 'CNAME');
  fs.unlinkSync(dest);
  fs.copyFileSync(src, dest);
  ghpages.publish('public');
}