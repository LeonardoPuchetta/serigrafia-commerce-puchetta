import React from "react";
import Home from "./pages/Home";

import CartProvider from "./providers/CartProvider";
import AuthProvider from "./providers/AuthProvider";


const App = () => {
  return (
    <AuthProvider>
      <CartProvider >
        <Home/>
      </CartProvider>
    </AuthProvider>
  )
}

export default App 


