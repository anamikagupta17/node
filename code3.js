const fs = require('fs');
const http=require('http');

let text=fs.readFileSync("data.txt",'utf-8');



const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
 // res.end('Hello World');
 res.end(text);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
