import React , {useState,useEffect,useRef,createRef}from 'react';
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
    }).catch(error => {console.log(error)});

},[idCategory]);


  return (
    <>
    <div className='container presentation'>
      <p>Bienvenidos a Suculenta, su vivero en línea. Aquí podrá encontrar una amplia variedad de plantas de alta calidad, desde cactus y suculentas hasta árboles frutales y plantas decorativas. También ofrecemos servicios de paisajismo y mantenimiento de jardines para ayudar a crear el hogar verde de sus sueños. Con expertos en jardinería siempre dispuestos a ayudar, estamos seguros de que encontrará la planta perfecta para su hogar. ¡Visítenos en nuestra tienda en línea o en nuestra ubicación física para explorar nuestra selección completa y obtener asesoramiento experto!</p>
    </div>

    <div className='container item-list-container'>
        <ItemList items={data}/>
    </div>
    </>
  )
}
