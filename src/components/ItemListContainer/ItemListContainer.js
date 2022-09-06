import React , {useState,useEffect}from 'react';
import ItemCount from '../ItemCount';

import ItemList from '../ItemList';
import products from './../../utils/products'
import customFetch from '../../utils/customFetch';

export default function ItemListContainer(props) {

const [data,setData] = useState([])  ;

useEffect(()=>{
      customFetch(2000,products)
        .then(products=> setData(products))
        .catch(error => console.log(error))
},[])




const onAdd = (number) => {
    alert("Has agregado " + number + " productos al carrito.");
}

  return (
    <>
        <ItemList items={data}/>
        <ItemCount initial={5} stock={3} onAdd={onAdd}/>
    </>
  )
}
