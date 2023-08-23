const http = require("node:http");
const fs = require("node:fs");
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        const data = fs.readFileSync('./Home.html',"utf8")
        res.end(data)
    }else if(req.url==="/About"){
        const data = fs.readFileSync("./About.html","utf8")
        res.end(data)
    }else if(req.url==='/Contact'){
        const data = fs.readFileSync("./Contact.html","utf8")
        res.end(data)
    }else if(req.url==="/Term"){
        const data = fs.readFileSync("./Term.html","utf8")
        res.end(data)
    }
})

server.listen(5050,()=>{
    console.log(`server run successfully at http://localhost:5050`);
})