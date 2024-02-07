const express = require('express')
const app = express()
const path = require('path')
const port = 3030;

/* RUTAS */
const authRoutes = require('./routes/authentication.routes')
const cartRoutes = require('./routes/cart.routes')
const otherRoutes = require("./routes/other.routes")

/* CONFIGURACIONES */
app.use(express.static('public'))


/* ENRUTADORES */
app.use("/", otherRoutes)
app.use("/autenticacion", authRoutes)
app.use("/carrito", cartRoutes)

// app.get('/home',(req,res) => {
//   res.redirect('/');
// })

// app.get('/registro',(req, res) => {
//   res.sendFile(path.join(__dirname,'./views/register.html'))
// })

// app.get('/pseudoclases',(req, res) => {
//   res.sendFile(path.join(__dirname,'./views/pseudoclases.html'))
// })

// app.get('/position',(req, res) => {
//   res.sendFile(path.join(__dirname,'./views/position.html'))
// })

app.listen(port,() => console.log(`http://localhost:${port}`))

