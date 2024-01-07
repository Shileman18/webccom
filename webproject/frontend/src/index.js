import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import Demo from './demo
import App from "./App";
import { CartProvider } from "./context/createContext";


// import App from './slider/App'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <CartProvider>
      <App />
    </CartProvider>

);
