const fs = require('fs');

let text=fs.readFileSync("data.txt",'utf-8');
console.log("data is : ",text);

let text2=text.replace('Monday','Sunday');
console.log(text2)


console.log("creating a new file");
fs.writeFileSync('filedata.txt',text2)