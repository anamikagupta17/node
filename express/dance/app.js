const express=require("express");
const path = require('path');
const app=express();
const port=80;


//Static files
app.use('/static',express.static('public')); // public is directory and static is path which i am creating to use from  css or other files

// to recive post data from app
app.use(express.urlencoded());

//Pug specific
app.set('view engine','pug') // set the tempate engine as pug
app.set('views',path.join(__dirname,'template')) //set the directory : tempate is my folder name where ill have pug files


app.get('/', (req, res) => {
  const params={}
  res.status(200).render('index', params);
})





app.listen(port,()=>{
    console.log(`Dance Website Started successfully on port: ${port}`);
})