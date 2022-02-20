var http = require('http');
var fs = require('fs');

http.createServer(function (req,res){
    // const text = fs.readFileSync('./content/biggerfile.txt','utf-8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/biggerfile.txt','utf-8');
    fileStream.on('open', ()=>{
        fileStream.pipe(res);
    });
    fileStream.on('error', (error)=>{
        res.end(error);
    });
})
.listen(5000);

//create a bigger file
// for(let i=0;i<100000;i++){
//     writeFileSync('./content/biggerfile.txt',`Hello World ${i}\n`,{flag:'a'});
// }

//default buffer size is 64kb
//to overwrite default buffer, add {highWaterMark:90000, encoding: 'utf-8} to createReadStream

// const {createReadStream} = require('fs');

// const stream = createReadStream('./content/bigfile.txt', {highWaterMark:90000, encoding: 'utf-8'});

// stream.on('data', (result)=>{
//     console.log(result);
// });
// stream.on('error', (error) => {
//     console.log(error);
// });