const http = require('http');

// function listener(req,res){
//     return res.send('req')
// }

 const server = http.createServer((req,res)=>{
    console.log('prajwal')
});

server.listen(4000)