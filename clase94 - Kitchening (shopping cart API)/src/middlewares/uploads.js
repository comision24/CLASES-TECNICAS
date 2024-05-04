const multer = require("multer");
const path = require("path")

const storageProducts = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/products");
  },
  filename: function (req, file, cb) {
    const formatFilename =
      file.fieldname + "-" + file.originalname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, formatFilename);
  },
});


const storageUser = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/users");
  },
  filename: function (req, file, cb) {
    const formatFilename =
    file.fieldname + "-" + file.originalname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, formatFilename);
  },
});

const uploadProducts = multer({ storage: storageProducts });
const uploadUsers = multer({ storage: storageUser });

module.exports = {
  uploadProducts,
  uploadUsers
}