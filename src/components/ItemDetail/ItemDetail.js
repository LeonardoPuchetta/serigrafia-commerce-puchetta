import React,{useState} from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';

import AnimatedButton from '../AnimatedButton';

import useCart from './../../hooks/useCart'

export default function ItemDetail(props) {

const {item}= props;
//traemos el contexto mediante el hook
const ctx = useCart();

const {isInCart} = useCart() ; 


const [itemCount,setItemCount] = useState(0);

const onAdd = (quantityToAdd) => {
    setItemCount(quantityToAdd);
    //usamos la funcion del contexto para agregar productos al estado global cart
    ctx.addItem(item,quantityToAdd);
}

  return (
    <>
    { item.imageUrl ? 
    
    
    <div className='item-detail-container container'>
        <div  className='item-detail-image-container'>
            <img src={item.imageUrl} alt={item.name} className='item-detail-image'/>
           
        </div>

        <div  className='item-detail-info'>
            <div className='item-detail-info-title'>
                <div>
                <span>{item.name}</span>
                </div>
                <div>
                    {isInCart(item.id)? 
                    <Link to='/cart'>
                        <AnimatedButton type={'info'} text={'Ver carrito'}/>
                    </Link>
                    :<></>}
                    <Link to='/'>
                        <AnimatedButton type={'success'} text={'Continuar comprando'}/>
                    </Link>
                    
                </div>
            </div>
            <div className='item-detail-info-description'>
                {item.description}
            </div>
            <div className='item-detail-info-price'>
                <strong>$ {item.price}</strong>
            </div>
            <div className='item-detail-info-stock'>
                <span>Actualmente contamos con <strong>{item.stock}</strong> unidades en stock</span>
            </div>
            <div>
                { isInCart(item.id) ? <div className='is-in-advice'><span >Agregado  en el carrito !
                </span></div> : <></>}
            </div>
            <div className='item-detail-info-count'>
                
                { (itemCount === 0 ) && (!isInCart(item.id)) ? <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/> 
                : <></>} 
                
            </div>
             
        </div>
    </div> 
    
    
    : <>
    <div className='item-detail-container container'>
    <h1>Cargando ...</h1>
    </div>
    </>
    }
 </>
  )
}
