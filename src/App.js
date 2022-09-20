import React from "react";
import Home from "./pages/Home";

import CartProvider from "./providers/CartProvider";


const App = () => {
  return (
    <CartProvider >
      <Home/>
    </CartProvider>
  )
}

export default App 


