import React,{useState,useEffect} from 'react'

import customFetch from '../../utils/customFetch';
import products from '../../utils/products';

import ItemDetail from '../ItemDetail';


export default function ItemDetailContainer() {

const [dato,setDato] = useState({});

useEffect(()=>{

  // customFetch(2000,products[1])
  //         .then(result => setDato(result))
  //         .catch(error => console.log(error))
  getItem(0);

},[])

const getItem = (index) => {
  customFetch(2000,products[index])
  .then(result => setDato(result))
  .catch(error => console.log(error))
}




  return (
    <ItemDetail item={dato}/> 
    
  )
}
