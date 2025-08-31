const express=require("express");
const path = require('path');
const app=express();
const port=80;




// serve static file
app.use(express.static('static'));

app.use(express.urlencoded())


// use tempate engine

app.set('view engine', 'pug')  // set tempate engine
app.set('views', path.join(__dirname, 'template'));



app.get('/', (req, res) => {
  const contnent='Hello there! This is tempate engine Pug Website'
  res.render('index', { title: 'Pug Website', contnent:contnent  })
})

app.post('/', (req, res) => {
  const contnent='Your form has been submiited!';
  console.log("body",req.body);
  res.render('index', { title: 'Pug Website', message:contnent  })
})

app.listen(port,()=>{
    console.log(`App Started successfully on port: ${port}`);
})