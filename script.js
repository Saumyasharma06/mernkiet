const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/product', (req, res) => {
  res.send('hello world')
})

app.post('/home',(req,res)=>{
  res.send('post request')
})

app.listen(1500,console.log("server strated..."));