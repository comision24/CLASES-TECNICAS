const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/products");
  },
  filename: function (req, file, cb) {
    const formatFilename =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, formatFilename);
  },
});

const uploadProducts = multer({ storage });

module.exports = {
  uploadProducts
}