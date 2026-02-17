import { createBrowserRouter, Navigate } from "react-router";
import App from "./App";
import Cart from "./Cart";
import { ErrorPage } from "./ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart/:cartId",
    element: <Cart />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
