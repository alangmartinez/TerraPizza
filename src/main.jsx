import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./theme/index";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "@fontsource/bebas-neue/400.css";
import CartProvider from "./context/CartContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{
  path: "/",
  element: <App />
}]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider resetCSS theme={theme}>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </ChakraProvider>
);
