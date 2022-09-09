import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import NavBar from './../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Footer from './../components/Footer';


export default function Home() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='*' element={<p>Error 404</p>}/>
      </Routes>  
      <Footer/> 
    </BrowserRouter>
  )
}
