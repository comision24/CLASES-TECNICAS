module.exports = (req,res) => {
  const arrProductos = [
    {
      id:1,
      name:"TV 55' Samsung",
      price: 1000000,
      discount: 20,
      img:"https://http2.mlstatic.com/D_NQ_NP_2X_847781-MLU73437662920_122023-F.webp"
    },
    {
      id:2,
      name:"Playstation 5",
      price: 1300000,
      discount: 10,
      img:"https://http2.mlstatic.com/D_NQ_NP_2X_700033-MLA69689802995_052023-F.webp"
    },
    {
      id:3,
      name:"Notebook HP 1231",
      price: 600000,
      discount: 20,
      img:"https://http2.mlstatic.com/D_NQ_NP_2X_802413-MLU72933208625_112023-F.webp"
    },
    {
      id:4,
      name:"Samsung S24",
      price: 1500000,
      discount: 30,
      img:"https://http2.mlstatic.com/D_NQ_NP_2X_972011-MLA74165262070_012024-F.webp"
    },
    {
      id:5,
      name:"Samsung S22",
      price: 1500000,
      discount: 30,
      img:"https://http2.mlstatic.com/D_NQ_NP_2X_972011-MLA74165262070_012024-F.webp"
    },
  ]
  res.render("index",{
    products: arrProductos
  })
}