import React,{useState} from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import Loading from '../Loading/Loading';
import AnimatedButton from '../AnimatedButton';
import useCart from './../../hooks/useCart'

export default function ItemDetail(props) {

const {item}= props;
//traemos el contexto mediante el hook
const ctx = useCart();

const {isInCart,removeItem} = useCart() ; 

const [itemCount,setItemCount] = useState(0);

const onAdd = (quantityToAdd) => {
    setItemCount(quantityToAdd);
    //usamos la funcion del contexto para agregar productos al estado global cart
    ctx.addItem(item,quantityToAdd);
}

  return (
    <>
    {/* { item.imageUrl ?  */}
    <div className='item-detail-container'>
        <div  className='item-detail-image'>
            <img src={item.imageUrl} alt={item.name} className='item-detail-image'/>  
        </div>
        <div  className='item-detail-info'>

            <div className='item-detail-info-header'>
                    <div>
                    <span>{item.name}</span>
                    </div>
                    <div className='buttons'>
                        {isInCart(item.id)? 
                        <>
                            <div className='button-action'>
                                <Link to='/cart'>
                                    <AnimatedButton type={'info'} text={'Ver carrito'}/>
                                </Link>
                            </div>
                        </>
                        :<></>}
                        <div className='button-action'>
                            <Link to='/'>
                                <AnimatedButton type={'success'} text={'Tienda'}/>
                            </Link>
                        </div>
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
                    { (itemCount === 0 ) && (!isInCart(item.id)) ? <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/> 
                    : <></>} 
                </div>
            </div>
            <div>
                    { isInCart(item.id) ? <div className='is-in-advice'><span >Agregado  en el carrito !
                    </span></div> : <></>}
            </div>
        </div>
    </div> 
    {/* : <>
    <div className='item-detail-container container'>
            <Loading/>
    </div>
    </>
    } */}
 </>
  )
}
