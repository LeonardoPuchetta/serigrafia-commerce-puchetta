import React , {useState,useEffect}from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';
import { db } from '../../utils/firebaseConfig';
import { collection, getDocs ,query, where } from "firebase/firestore";


import './ItemListContainer.css';


export default function ItemListContainer(props) {

const [data,setData] = useState([]);
const {idCategory} = useParams(); 


useEffect( () => {

    let queryConfig ;
    //configuracion de la query 
    if (idCategory !== undefined){
        queryConfig = query(collection(db,'products'),where('category','array-contains',idCategory))
    } else {
      queryConfig = query(collection(db,'products'))
    }
    //traemos los datos con la query apropiada
    const querySnapshot = getDocs(queryConfig).then(result =>{
    //usamos .docs para pasar de datos binarios a objetos js
    const dataFromFirestore = result.docs.map( item => ({
                      id:item.id,
                      ...item.data()
          }))
    setData(dataFromFirestore)
    }).catch(error =>{
      console.log(error)
    })
    
},[idCategory])



  return (
    <>
    <div className='container item-list-container'>
        <ItemList items={data}/>
    </div>
    </>
  )
}
