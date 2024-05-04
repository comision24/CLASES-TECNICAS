const router = require("express").Router();
const {getOrder, addProductToOrder, removeProductToOrder} = require("../../controllers/api/cart");

/* /api/cart */
router.get("/", getOrder)

router.patch("/add/:id", addProductToOrder)

router.patch("/remove/:id", removeProductToOrder)

// router.patch("/more-quantity", moreQuantity)

// router.patch("/less-quantity", lessQuantity)

// router.delete("/remove-order", deleteOrder)

module.exports = router;
