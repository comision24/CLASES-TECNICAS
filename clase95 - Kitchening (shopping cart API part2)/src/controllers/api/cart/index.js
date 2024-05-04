module.exports = {
  // API
  getOrder: require("./getOrder.controller.api"),
  addProductToOrder: require("./addProductToOrder.controller.api"),
  removeProductToOrder: require("./removeProductToOrder.controller.api"),
  moreQuantity: require("./moreQuantity.controller.api"),
  lessQuantity: require("./lessQuantity.controller.api"),
  canceledOrder:require("./canceledOrder.controller.api"),
  completedOrder:require("./completedOrder.controller.api"),
};
