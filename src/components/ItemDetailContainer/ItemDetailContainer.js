import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

import { db } from '../../utils/firebaseConfig';
import {  getDoc ,doc } from "firebase/firestore";

import ItemDetail from '../ItemDetail';


export default function ItemDetailContainer() {

const [dato,setDato] = useState({});

const {idItem} = useParams();

//constante para query
const docRef = doc(db, "products", idItem);

useEffect(()=>{

  const querySnapshot = getDoc(docRef).then(result =>{
    const dataFromFirestore = {
      id:result.id,
      ...result.data()
    }
    setDato(dataFromFirestore)
  }).catch(error => {
    console.log(error)
  })


},[])

  return (
    <ItemDetail item={dato}/> 
    
  )
}
