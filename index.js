const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('<h1>HELLO THIS IS MY WORLD</h1>')
})
const products =[
  {
    id :1,
    name : "iphone"
  },

  {
    id :2,
    name : "samsung"
  },

  {
    id :3,
    name : "oneplus"
  }
]
app.get('/products',(req,res)=>{
  res.json(products)
})

app.listen(5000,()=>console.log('Server Running Sucessfully...'));