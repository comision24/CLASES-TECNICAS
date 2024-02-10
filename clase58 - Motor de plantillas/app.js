const express = require("express")
const app = express()
const port = 3030;
const path = require("path")


/* RUTAS */
const otherRoutes = require("./routes/other.routes")
const productsRoutes = require("./routes/products.routes")


/* MIDDLEWARE */
app.use(express.static('public'))

/* CONFIGURACIONES */
app.set("view engine", "ejs");
app.set("views","./views")

/* ENRUTADORES */
app.use("/", otherRoutes)
app.use("/productos", productsRoutes)


/* SERVIDOR */
app.listen(port, () => console.log(`http://localhost:${port}`))