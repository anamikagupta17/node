const http=require('http');
const fs=require('fs');

const hostname='127.0.0.1';
const port=3000;

let home=fs.readFileSync('index.html');
let about=fs.readFileSync('about.html');
let contact=fs.readFileSync('contact.html');
let services=fs.readFileSync('services.html');
let error404=fs.readFileSync('error404.html');

const server=http.createServer((req,res)=>{
    //console.log(req.url);
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    if(req.url == '/'){
    res.end(home);
    }
    else if(req.url == '/about'){
    res.end(about);
    }
    else if(req.url == '/contact'){
    res.end(contact);
    }
    else if(req.url == '/services'){
    res.end(services);
    }else{
         res.statusCode=404;
         res.end(error404);
    }
   

})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})