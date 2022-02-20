const path = require('path');

// find out which direction the slash faces
console.log(path.sep);

const filePath = path.join('/subfolder','text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(__dirname,'subfolder','text.txt');
console.log(absolutePath);