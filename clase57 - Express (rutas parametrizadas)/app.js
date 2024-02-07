const express = require('express')
const app = express()
const path = require('path')
const port = 3030;

/* RUTAS */
const authRoutes = require('./routes/authentication.routes')
const cartRoutes = require('./routes/cart.routes')
const otherRoutes = require("./routes/other.routes")
const productRoutes = require("./routes/products.routes")

/* CONFIGURACIONES */
app.use(express.static('public'))


/* ENRUTADORES */
app.use("/", otherRoutes)
app.use("/autenticacion", authRoutes)
app.use("/carrito", cartRoutes)
app.use("/productos", productRoutes)

app.listen(port,() => console.log(`http://localhost:${port}`))