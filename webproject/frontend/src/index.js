import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Demo from './demo

import { CartProvider } from "./context/createContext";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <CartProvider>
      <App />
    </CartProvider>

);
