const {readFileSync, writeFileSync, write} = require('fs');

const firstFile = readFileSync('./content/newfile1.txt','utf-8');
const secondFile = readFileSync('./content/newfile2.txt','utf-8');

console.log(firstFile);
console.log(secondFile);

writeFileSync(
    './content/outputfile1.txt',
    `Hello World ${firstFile}, ${secondFile}`, 
    {flag:'a'});