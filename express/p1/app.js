const express=require("express");
const app=express();
const port=80;

app.get("/",(req,res)=>{
res.send("This is my first express app");
})

app.get("/about",(req,res)=>{
res.send("This is my about");
})

app.get("/contact",(req,res)=>{
res.status(200).send("This is my contact");
})

app.post("/contact",(req,res)=>{
    //console.log(req);
res.send(`This is my contact post request`);
})


// serve static file

app.use('/static',express.static("static"));


// use tempate engine

app.set('view engine', 'pug')  // set tempate engine

app.get('/demoPug', (req, res) => {
  res.render('index', { title: 'Hey Anamika', message: 'Hello there! This is tempate engine Pug' })
})

app.listen(port,()=>{
    console.log(`App Started successfully on port: ${port}`);
})