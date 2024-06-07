import DetailProduct from "../pages/DetailProduct";
import Product from "../pages/Product";

export const routesProducts = [
  {
    path: "/productos",
    element: <Product />,
  },
  {
    path: "/productos/:id",
    element: <DetailProduct />
  },
]