import React , {useState,useEffect}from 'react';
import ItemCount from '../ItemCount';

import { useParams } from 'react-router-dom';

import ItemList from '../ItemList';
import products from './../../utils/products'
import customFetch from '../../utils/customFetch';

import { db } from '../../utils/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";


import './ItemListContainer.css'

export default function ItemListContainer(props) {

const {idCategory} = useParams(); 

// console.log(idCategory);

const [data,setData] = useState([])  ;

// useEffect(async () =>{
//   const querySnapshot = await getDocs(collection(db, "products"));
//   querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// },[data])



useEffect( ()=>{
  //si existe categoria filtramos el array de product.category segun la misma

  if(idCategory !== undefined){
    customFetch(2000,products.filter(product => product.category.includes(idCategory)))
        //obtenemos solo los productos que tienen idCategory en su array category
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
