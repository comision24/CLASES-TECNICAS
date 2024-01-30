const express = require('express')
const app = express()
const path = require('path')
const port = 3030;


app.use(express.static('public'))

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get('/home',(req,res) => {
  res.redirect('/');
})

app.get('/registro',(req, res) => {
  res.sendFile(path.join(__dirname,'./views/register.html'))
})

app.get('/pseudoclases',(req, res) => {
  res.sendFile(path.join(__dirname,'./views/pseudoclases.html'))
})

app.get('/position',(req, res) => {
  res.sendFile(path.join(__dirname,'./views/position.html'))
})

app.listen(port,() => console.log(`http://localhost:${port}`))

