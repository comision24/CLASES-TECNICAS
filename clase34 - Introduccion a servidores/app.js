const express = require("express");
const path = require("path");

const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get('/imagen', (req,res) => {
  res.sendFile(path.join(__dirname,"./images/img_1.jpg"))
})

app.get('/ver-pdf',(req,res) => {
  res.sendFile(path.join(__dirname,"./pdfs/file.pdf"))
})

app.get("/detalle", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/detalle.html"));
});

app.listen(port, console.log("Servidor corriendo")); // localhost:3030
