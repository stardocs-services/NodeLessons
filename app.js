const {readFile, writeFile} = require('fs').promises;
const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(readFile);

// const getText = (path) => {
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8', (err,data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         });
//     });
// }

// getText('./content/newfile1.txt')
// .then(result=>console.log(result))
// .catch(err=>console.log(err));

const start = async() => {
    try{
        const first = await readFile('./content/newfile1.txt', 'utf-8');
        const second = await readFile('./content/newfile2.txt', 'utf-8');
        await writeFile(
            './content/result-newfile.txt',
            `HELLO WORLD: ${first} ${second}`,
            {flag: 'a'});
        console.log(first, second);
    }catch(error){
        console.log(error);
    }
}

start();
