import React from 'react';
import './ItemDetail.css';

import ItemCount from '../ItemCount';

export default function ItemDetail(props) {

const {item}= props;

const onAdd = (number) => {
    alert("Has agregado " + number + " productos al carrito.");
}

console.log(item.stock)



  return (
    <>
    { item.imageUrl ? 
    
    <div className='item-detail-container'>

        <div  className='item-detail-image'>
            <img src={item.imageUrl}/>
        </div>

        <div  className='item-detail-info'>
            <div className='item-detail-info-title'>
                <h1>{item.name}</h1>
            </div>
            <div className='item-detail-info-description'>
                {item.description}
            </div>
            <div className='item-detail-info-price'>
                <strong>$ {item.price}</strong>
            </div>
            <div className='item-detail-info-stock'>
                <h4>{item.stock} unidades en stock</h4>
            </div>
            <div className='item-detail-info-count'>
                <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>  
            </div>
      
        </div>
        
    </div> 
    : <p><h1>Cargando ...</h1></p>
    }
 </>
  )
}
