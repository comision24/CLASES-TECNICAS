const express = require('express')
const path = require('path')

const app = express();
const port = 3030;

app.use(express.static('public'))

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/contact', (req,res) => {
  res.sendFile(path.join(__dirname,'contact.html'))
})


// server
app.listen(port,() => console.log(`http://localhost:${port}`))