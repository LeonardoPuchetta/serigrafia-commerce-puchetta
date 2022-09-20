import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";

// import {CartContext} from './../components/CartContext/CartContext'

import NavBar from './../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Cart from '../components/Cart';
import Footer from './../components/Footer';



export default function Home() {


  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<p>Error 404</p>}/>
      </Routes>  
      <Footer/> 
    </BrowserRouter>
  )
}
