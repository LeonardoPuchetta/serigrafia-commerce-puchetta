import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from './../components/NavBar';
import ItemListContainer from './../containers/ItemListContainer';
import ItemDetailContainer from './../containers/ItemDetailContainer';
import Cart from '../components/Cart';
import Footer from './../components/Footer';
import Error404 from '../components/Error404';
import About from '../components/About';

export default function Home() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>  
      <Footer/> 
    </BrowserRouter>
  )
}
