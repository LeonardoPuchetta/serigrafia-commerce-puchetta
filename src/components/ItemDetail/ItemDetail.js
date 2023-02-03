import React,{useState,useEffect} from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import AnimatedButton from '../AnimatedButton';
import IconButton from '../IconButton/IconButton';
import {BsFillBagPlusFill} from 'react-icons/bs';

import useCart from './../../hooks/useCart';
import useAuth from '../../hooks/useAuth';

export default function ItemDetail(props) {

const {item}= props;
//traemos el contexto mediante el hook
const ctx = useCart();
const {isInCart} = useCart() ; 
const {user} = useAuth();

const [itemCount,setItemCount] = useState(0);

const onAdd = (quantityToAdd) => {
    setItemCount(quantityToAdd);
    //usamos la funcion del contexto para agregar productos al estado global cart
    ctx.addItem(item,quantityToAdd);
}

  return (
    <>
    {/* <div className='item-detail'>
        <div  className='item-detail-image'>
            <img src={item.imageUrl} alt={item.name} className='item-detail-image'/>  
        </div>
        <div  className='item-detail-info'>
            <div className='item-detail-info-header'>
                    <div>
                        <span>{item.name}</span>
                    </div>
                    <div className='buttons'>
                        {item.category ? <>
                            {item.category.map((category,index) => {
                            return ( 
                            <div className='button-action' key={index}>
                                <Link to={`/category/${category}`}>
                                    <AnimatedButton type={'category'} text={category}/>
                                </Link>
                            </div>)
                        })}
                        
                        </>:<></>}
                    </div>
                
            </div>
            <div className='item-detail-info-description'>
                {item.description}
            </div>
            <div className='item-detail-info-price'>
                <strong>$ {item.price}</strong>
            </div>
           
            <div className='item-detail-sale'>
                <div className='item-detail-info-stock'>
                    <span>Actualmente contamos con <strong>{item.stock}</strong> unidades en stock</span>
                </div>
                <div className='item-detail-info-count'>
                    { (itemCount === 0 ) && (!isInCart(item.id)) && (user) ? <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/> 
                    : <></>} 
                </div>
            </div>
            <div>
                    { isInCart(item.id) ? <div className='is-in-advice'><span >Agregado  en el carrito !
                    </span></div> : <></>}
            </div>
        </div>
    </div>  */}
    <div className='item-detail'>

        <div  className='container-detail-image'>
            <img src={item.imageUrl} alt={item.name} className='detail-image'/>  
        </div>

        <div  className='container-detail-info'>
            <div className='info-header'>
                <div className='info-title'>
                  <span>{item.name}</span>
                </div>
                <div className='info-btn'>
                        {item.category ? <>
                            {item.category.map((category,index) => {
                            return ( 
                            <div className='link-btn' key={index}>
                                <Link to={`/category/${category}`}>
                                    <AnimatedButton type={'category'} text={category}/>
                                </Link>
                            </div>)
                        })}
                        
                        </>:<></>}
                </div>
            </div>

            <div className='info-description'>
                {item.description}
            </div>

            <div className='info-price'>
                <div className='price'>
                    <strong>$ {item.price}</strong>
                </div>
                <div className='stock'>
                    Actualmente contamos con <strong>{item.stock}</strong> unidades en stock
                </div>
            </div>

            <div className='buy-btn'>
            
                {/* <IconButton icon={<BsFillBagPlusFill/>}  tooltipOn = {true} tooltip={'Agregar al carrito'}
              classIcon={'icon-button-add'} classTooltip={'span-tooltip-add'}/> */}

                <IconButton icon={<BsFillBagPlusFill/>}  tooltipOn = {true} tooltip={'Agregar al carrito'}
              classIcon={'icon-button-add'} classTooltip={'span-tooltip-add'}/>
            </div>

        </div>

    </div>
 </>
  )
}
