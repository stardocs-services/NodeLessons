const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to my home page');
    }else if(req.url === '/about'){
        res.end('Welcome to my about page');
    } else{
        res.end(`
        <h1>Page not found</h1>
        <p>Page could not be found</p>
        <a href="/">Home</a>
        `);
    };
});

server.listen(5000);