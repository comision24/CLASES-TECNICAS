const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

/* CONFIGS */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

/* MIDDLEWARE */
app.use(express.static("public"));

/* ROUTERS */
const otherRoutes = require("./routes/other.routes")

/* ROUTES */
app.use("/",otherRoutes)

/* SERVER */
app.listen(port, () => console.log(`http://localhost:${port}`));
