import React,{useState} from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ItemCount from '../ItemCount';

import useCart from './../../hooks/useCart'

export default function ItemDetail(props) {

const {item}= props;
//traemos el contexto mediante el hook
const ctx = useCart();


const [itemCount,setItemCount] = useState(0);

const onAdd = (quantityToAdd) => {
    setItemCount(quantityToAdd);
    //usamos la funcion del contexto para agregar productos 
    //al estado global cart
    ctx.addItem(item,quantityToAdd);

}





  return (
    <>
    { item.imageUrl ? 
    
    <div className='item-detail-container '>

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
                { (itemCount === 0 ) ? <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/> 
                : <Link to='/cart'><Button>Terminar compra</Button></Link>} 

                <Link to='/'><Button>Continuar comprando</Button></Link> 
            </div>
      
        </div>
        
    </div> 
    : <><h1>Cargando ...</h1></>
    }
 </>
  )
}
