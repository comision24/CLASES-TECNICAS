const router = require("express").Router();
const {
  listApi,
  storeApi,
  updateApi,
  removeApi,
  renderImg,
} = require("../../controllers/api/products");
const { uploadProducts } = require("../../middlewares/uploads");

/* /api/products */
router.get("/", listApi);
router.post(
  "/",
  uploadProducts.fields([
    { name: "imagePrincipal" },
    { name: "imagesSecondary" },
  ]),
  storeApi
);

router.put(
  "/:id",
  uploadProducts.fields([
    { name: "imagePrincipal" },
    { name: "imagesSecondary" },
  ]),
  updateApi
);

router.delete("/:id", removeApi);

router.get("/:image", renderImg);

module.exports = router;
