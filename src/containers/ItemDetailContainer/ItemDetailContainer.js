import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getItemDetailFetch } from '../../utils/firebaseFetch';
import ItemDetail from './../../components/ItemDetail'

export default function ItemDetailContainer() {

const [dato,setDato] = useState({});

const {idItem} = useParams();

  useEffect(()=>{
     
      getItemDetailFetch(idItem).then(result =>{
        setDato(result)
      }).catch(error => {
        console.log(error)
      }) 
    
 

  },[idItem])

  return (
    
    <div className='container'>
        <ItemDetail item={dato}/> 
    </div>
  )
}
