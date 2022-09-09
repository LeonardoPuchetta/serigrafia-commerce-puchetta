import React , {useState,useEffect}from 'react';
import ItemCount from '../ItemCount';

import { useParams } from 'react-router-dom';

import ItemList from '../ItemList';
import products from './../../utils/products'
import customFetch from '../../utils/customFetch';

import './ItemListContainer.css'

export default function ItemListContainer(props) {

const {idCategory} = useParams(); 

console.log(idCategory);

const [data,setData] = useState([])  ;

useEffect(()=>{

  if(idCategory !== undefined){
    customFetch(2000,products.filter(product => product.category.includes(idCategory)))
        .then(products=> setData(products))
        .catch(error => console.log(error))

  } else {
    
      customFetch(2000,products)
        .then(products => setData(products))
        .catch(error => console.log(error))
    
  } 
},[idCategory])

  return (
    <>
    <div className='container item-list-container'>
        <ItemList items={data}/>
    </div>
    </>
  )
}
