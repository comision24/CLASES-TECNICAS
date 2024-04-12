const { check, body } = require("express-validator");
const path = require("path");

const regExpFiles = /.png|.jpg|.jpeg|.webp|.gif/i;

const fieldTitle = check("title")
  .notEmpty()
  .withMessage("El titulo es requerido")
  .bail()
  .isAlphanumeric("es-ES", { ignore: " .," })
  .withMessage("El titulo debe ser alfanumerico")
  .bail()
  .isLength({ min: 5, max: 100 })
  .withMessage("El titulo debe tener un minimo de 5 caracteres");

const fieldPrice = check("price")
  .notEmpty()
  .withMessage("El precio es requerido")
  .bail()
  .isNumeric()
  .withMessage("El precio debe ser numerico")
  .bail()
  .isInt({ min: 0 })
  .withMessage("El precio debe tener un valor positivo")
  .bail()
  .isDecimal()
  .withMessage("El precio debe ser decimal");

const fieldDescription = check("description")
  .notEmpty()
  .withMessage("La descripción es requerido")
  .bail()
  .isAlphanumeric("es-ES", { ignore: " .," })
  .withMessage("La descripción debe ser alfanumerico")
  .bail()
  .isLength({ min: 30, max: 500 })
  .withMessage(
    "La descripción debe tener un minimo de 30 y un maximo de 500 caracteres"
  );

const fieldChef = check("chef")
  .not()
  .isIn([""])
  .withMessage("El chef es requerido");

const fieldSection = check("section")
  .notEmpty()
  .withMessage("Elegir la sección a la que corresponde el artículo");

const fieldImagePrincipalStore = body("imagePrincipal").custom(
  (value, { req }) => {
    const lengthImages = req.files?.imagePrincipal?.length;

    if (!lengthImages) throw new Error("Debes ingresar una imagen principal");
    else {
      if (lengthImages > 1)
        throw new Error("No puedes ingresar mas de 1 archivo");

      const extFile = path.extname(req.files.imagePrincipal[0].originalname);
      const isFormatSuccess = regExpFiles.test(extFile);

      if (!isFormatSuccess)
        throw new Error("El formato de la imagen principal es invalido");
    }
    return true;
  }
);

const fieldImagesSecondaryStore = body("imagesSecondary").custom(
  (value, { req }) => {
    const lengthImages = req.files?.imagesSecondary?.length;

    if (!lengthImages) throw new Error("Debes ingresar imagenes secundarias");
    else {
      if (lengthImages > 3)
        throw new Error("No puedes ingresar mas de 3 archivos");
      const imagesSecondary = req.files.imagesSecondary;
      const existSomeFormatInvalid = imagesSecondary.some((img) => {
        const extFile = path.extname(img.originalname);
        return regExpFiles.test(extFile);
      });
      if (existSomeFormatInvalid)
        throw new Error(
          "Uno de los archivos son invalidos. Formatos validos: .png .jpg .jpeg .webp .gif"
        );
    }
    return true;
  }
);

const fieldImagePrincipalUpdate = body("imagePrincipal").custom(
  (value, { req }) => {
    const lengthImages = req.files?.imagePrincipal?.length;

    if (lengthImages) {
      if (lengthImages > 1)
        throw new Error("No puedes ingresar mas de 1 archivo");

      const extFile = path.extname(req.files.imagePrincipal[0].originalname);
      const isFormatSuccess = regExpFiles.test(extFile);

      if (!isFormatSuccess)
        throw new Error("El formato de la imagen principal es invalido");
    }
    return true;
  }
);

const fieldImagesSecondaryUpdate = body("imagesSecondary").custom(
  (value, { req }) => {
    const lengthImages = req.files?.imagesSecondary?.length;

    if (lengthImages) {
      if (lengthImages > 3)
        throw new Error("No puedes ingresar mas de 3 archivos");

      const imagesSecondary = req.files.imagesSecondary;
      const existSomeFormatInvalid = imagesSecondary?.some((img) => {
        const extFile = path.extname(img.originalname);
        return regExpFiles.test(extFile);
      });

      if (existSomeFormatInvalid)
        throw new Error(
          "Uno de los archivos son invalidos. Formatos validos: .png .jpg .jpeg .webp .gif"
        );
    }

    return true;
  }
);

const defaultValidationFiels = [
  fieldTitle,
  fieldPrice,
  fieldDescription,
  fieldChef,
  fieldSection,
];

module.exports = {
  productsValidationStore: [
    ...defaultValidationFiels,
    fieldImagePrincipalStore,
    fieldImagesSecondaryStore,
  ],
  productsValidationUpdate: [
    ...defaultValidationFiels,
    fieldImagePrincipalUpdate,
    fieldImagesSecondaryUpdate,
  ],
};
