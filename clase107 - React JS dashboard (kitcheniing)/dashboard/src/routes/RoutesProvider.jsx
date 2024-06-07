import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import { routesProducts } from "./RoutesProduct";
import { routesUsers } from "./RoutesUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      ...routesProducts,
      ...routesUsers,
      {
        path: "/ordenes",
        element: <Orders />,
      },
    ],
  },
]);

export const RouterProvider_ = () => <RouterProvider router={router} />;
