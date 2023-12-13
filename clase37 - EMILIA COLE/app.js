const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/home", (req, res) => {
  res.redirect('/');
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/contact.html"));
});

app.get('/music',(req,res) => {
  res.sendFile(path.join(__dirname, "./views/music.html"))
})

app.listen(port, () => console.log(`http://localhost:${port}`));
