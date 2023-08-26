const http = require('http');

// function listener(req,res){
//     return res.send('req')
// }

 const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/'){
        res.setHeader('Content-type','text/html');
        res.write(`<html>`)
        res.write(`<h1>Hello this is node js server</h1>`);
        res.write(`</html>`)
        res.end();
    }
   else if (url==='/node'){
        res.setHeader('Content-type','text/html');
        res.write(`<html>`)
        res.write(`<h1>Welcome to MY Node js Project </h1>`);
        res.write(`</html>`)
        res.end();
    }
    else    if(url==='/home'){
        res.setHeader('Content-type','text/html');
        res.write(`<html>`)
        res.write(`<h1>Welcome to Home Page </h1>`);
        res.write(`</html>`)
        res.end();
    }
    else if(url==='/about'){
        res.setHeader('Content-type','text/html');
        res.write(`<html>`)
        res.write(`<h1>Welcome to About Page </h1>`);
        res.write(`</html>`)
        res.end();
    }
   
});

server.listen(4000)