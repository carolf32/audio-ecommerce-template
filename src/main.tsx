import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/UserContext.tsx";
import { CartProvider } from "./providers/CartContext.tsx";
import { MenuProvider } from "./providers/MenuContext.tsx";
import { ProductProvider } from "./providers/ProductContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <MenuProvider>
              <App />
            </MenuProvider>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
