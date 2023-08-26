const fs = require('fs');


const  requesthandler = (req,res)=>{

const url = req.url;
const method = req.method;
if(url==='/'){
    fs.readFile("message.txt", 'utf8',(err,data)=>{
        if(err){
            console.log(err);
            return ;
        }
        console.log(data)
        res.write("<html>");
        res.write(`<body>${data}</body>`);
        res.write(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></from></body>`);
        res.write(`</html>`)
        return  res.end();
    })
  
}
else if (url==='/message' && method ==='POST' ){
    const body=[];
    req.on('data',(dataPiece)=>{
         console.log(dataPiece)
         body.push(dataPiece);
    })
    return req.on('end',()=>{
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.split('=')[1];
        fs.writeFile('message.txt',message,(error)=>{
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
        })
    })
 }

}

module.exports = requesthandler;