const express = require('express') 
const port = process.env.PORT || 3000

const app = express()


app.get ('/',(req,res) =>{
  res.send('<h1>welcome to my world!</h1>')
})

app.listen(port,() =>{
   console.log('application is running succesfully:',port)
})