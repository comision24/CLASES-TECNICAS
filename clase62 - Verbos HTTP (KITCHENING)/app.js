const express = require("express");
const app = express();
const path = require("path");
const port = 3030;
const methodOverride = require("method-override")

/* CONFIGS */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

/* MIDDLEWARE */
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(methodOverride("_method"))

/* RUTAS */
const authRoutes = require("./routes/authentication.routes");
const cartRoutes = require("./routes/cart.routes");
const otherRoutes = require("./routes/other.routes");
const productRoutes = require("./routes/products.routes");
const adminRoutes = require("./routes/admin.routes");



/* ENRUTADORES */
app.use("/", otherRoutes);
app.use("/autenticacion", authRoutes);
app.use("/carrito-compra", cartRoutes);
app.use("/productos", productRoutes);
app.use("/admin", adminRoutes);
// app.use("*", (req,res) => res.sendFile(path.join(__dirname,"./public/images/404.png")))
app.use((req,res, next) => {
  res.status(404).render("notFound")
})


app.listen(port, () => console.log(`http://localhost:${port}`));
