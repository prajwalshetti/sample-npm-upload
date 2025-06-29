const fs = require('fs');
const path = require('path');

const dependenciesDir = path.join(__dirname, 'dependencies');

// Read all files in the dependencies folder
fs.readdir(dependenciesDir, (err, files) => {
  if (err) {
    console.error('Error reading dependencies directory:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(dependenciesDir, file);

    // Read each file's content
    fs.readFile(filePath, 'utf-8', (err, content) => {
      if (err) {
        console.error(`Error reading file ${file}:`, err);
        return;
      }
      console.log(`Content of ${file}:`);
      console.log(content);
      console.log('---------------------');
    });
  });
});
