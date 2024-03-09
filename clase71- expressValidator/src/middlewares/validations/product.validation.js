const { check, body } = require("express-validator");
const path = require("path")

const fieldName = check("name")
  .notEmpty()
  .withMessage("El campo nombre es requerido")
  .bail()
  .isAlphanumeric("es-ES",{ignore: " "})
  .withMessage("El campo nombre debe ser alfanumerico").bail()
  .isLength({ min: 5, max: 80 })
  .withMessage("La longitud del nombre es incorrecto");

const fieldPrice = check("price")
  .notEmpty()
  .withMessage("El campo precio es requerido")
  .bail()
  .isNumeric()
  .withMessage("El valor ingresado es incorrecto");

const fieldDiscount = check("discount")
  .optional({
    nullable: true,
  })
  .isNumeric()
  .withMessage("El campo descuento debe ser un número");

const fieldDescription = check("description")
  .notEmpty()
  .withMessage("El campo descripción es requerido").bail()
  .isAlphanumeric("es-ES")
  .withMessage("El campo descripción debe ser alfanumerico").bail()
  .isLength({ min: 30, max: 500 })
  .withMessage("La longitud del nombre es incorrecto");

const fieldImg = body("img").custom((value, {req}) => {
  
    const image = req.file
    const extValid = [".png",".webp",".jpg",".jpeg"]

    if(image?.filename) {
      const file = req.file?.filename
      const ext = path.extname(image.filename)
      
      if(!file) throw new Error("El archivo es requerido")
      else {
        if(!extValid.includes(ext)){
          throw new Error("El tipo de imagen es incorrecto")
        }
      }
    }

    return true;
})

const fieldCategory = check("category")
.isIn(["in-sale", "visited"]).withMessage("El campo category es requerido")


module.exports = [fieldName, fieldPrice, fieldDiscount, fieldDescription, fieldCategory, fieldImg];
