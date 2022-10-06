import React , {useState,useEffect}from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import { getItemListFetch } from '../../utils/firebaseFetch';

import './ItemListContainer.css';

export default function ItemListContainer(props) {

const [data,setData] = useState([]);
const {idCategory} = useParams(); 


useEffect( () => {

    getItemListFetch(idCategory).then(result => {
      setData(result)
    }).catch(error => {console.log(error)})
  
},[idCategory])



  return (
    <>
    <div className='container item-list-container'>
        <ItemList items={data}/>
    </div>
    </>
  )
}
