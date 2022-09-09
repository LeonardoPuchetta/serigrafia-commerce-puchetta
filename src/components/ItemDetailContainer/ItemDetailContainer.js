import React,{useState,useEffect} from 'react'

import customFetch from '../../utils/customFetch';
import products from '../../utils/products';
import { useParams } from 'react-router-dom';

import ItemDetail from '../ItemDetail';


export default function ItemDetailContainer() {

const [dato,setDato] = useState({});

const {idItem} = useParams();


useEffect(()=>{

  customFetch(2000,products.find(productItem => productItem.id == idItem))
  .then(result => setDato(result))
  .catch(error => console.log(error))

},[idItem])


 


  return (
    <ItemDetail item={dato}/> 
    
  )
}
