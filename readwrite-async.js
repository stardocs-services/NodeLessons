const {readFile, writeFile, write} = require('fs');

readFile('./content/newfile1.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/newfile2.txt','utf-8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            './content/outputfile2.txt',
            `Hello World ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        );
    })
    console.log(result);
})
