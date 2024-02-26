var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const partials = require("express-partials")

/* RUTAS */
const authRoutes = require("./routes/authentication.routes");
const cartRoutes = require("./routes/cart.routes");
const otherRoutes = require("./routes/other.routes");
const productRoutes = require("./routes/products.routes");
const adminRoutes = require("./routes/admin.routes");

var app = express();

/* CONFIGS */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*app.use(partials()) MIDDLEWARE */

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));


/* ENRUTADORES */
app.use("/", otherRoutes);
app.use("/autenticacion", authRoutes);
app.use("/carrito-compra", cartRoutes);
app.use("/productos", productRoutes);
app.use("/admin", adminRoutes);
app.use((req,res, next) => {
  res.status(404).render("notFound")
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
