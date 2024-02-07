module.exports = (req, res) => {
  const arrProductos = [
    {
      id: 1,
      name: "Card 1",
    },
    {
      id: 2,
      name: "Card 2",
    },
    {
      id: 3,
      name: "Card 3",
    },
    {
      id: 4,
      name: "Card 4",
    },
    {
      id: 5,
      name: "Card 5",
    },
    {
      id: 6,
      name: "Card 6",
    },
    {
      id: 10,
      name: "Card 10",
    },
  ];

  const idProduct = parseInt(req.params.id);
  const nameCategory = req.params.category

  const productFind = arrProductos.find(product => product.id === idProduct)

  if(!productFind) {
    return res.send("El producto con el ID número " + idProduct + " no existe.")
  }

  if(nameCategory) {
    return  res.send("ESTE ES EL PRODUCTO CON EL ID NÚMERO: " + productFind.name + " Y SU CATEGORIA ES: " + nameCategory)
  }

  res.send("ESTE ES EL PRODUCTO CON EL ID NÚMERO: " + productFind.name);
};
