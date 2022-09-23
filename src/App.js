import React from "react";
import Home from "./pages/Home";

import CartProvider from "./providers/CartProvider";
import './App.css'

const App = () => {
  return (
    <CartProvider >
      <Home/>
    </CartProvider>
  )
}

export default App 


