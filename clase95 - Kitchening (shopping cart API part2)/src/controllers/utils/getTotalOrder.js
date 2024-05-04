module.exports = (data = []) => {
  return data.reduce(
    (
      acum,
      {
        price,
        orderproducts: {
          dataValues: { quantity },
        },
      }
    ) => {
      acum = price * quantity;
      return acum;
    },
    0
  );
};
