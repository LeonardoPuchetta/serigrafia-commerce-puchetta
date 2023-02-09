import React,{useState} from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import AnimatedButton from '../AnimatedButton';
import ModalComponent from '../ModalComponent';
import IconButton from '../IconButton/IconButton';

import {BsFillBagPlusFill} from 'react-icons/bs';
import {BsFillBagCheckFill} from 'react-icons/bs';

import useCart from './../../hooks/useCart';
import useAuth from '../../hooks/useAuth';

export default function ItemDetail(props) {

const {item}= props;

//traemos el contexto mediante el hook
const {isInCart,addItem} = useCart() ; 

const [itemCount,setItemCount] = useState(0);
const [isVisibleModalAdd,setIsVisibleModalAdd] = useState(false);

const handleCloseModalAdd = () =>{
  setIsVisibleModalAdd(false)
}

const onAdd = (quantityToAdd) => {
    setItemCount(quantityToAdd);
    //usamos la funcion del contexto para agregar productos al estado global cart
    addItem(item,quantityToAdd);
}

  return (
    <>
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
            { (itemCount === 0 ) && (!isInCart(item.id)) ? <IconButton icon={<BsFillBagPlusFill/>}  tooltipOn = {true} tooltip={'Agregar al carrito'}
                    classIcon={'icon-button-add'} classTooltip={'span-tooltip-add'} onClick={()=> setIsVisibleModalAdd(true)}/> 
                    : <></>}
            {(isInCart(item.id)) ? <IconButton icon={<BsFillBagCheckFill/>} classIcon={'icon-button-add'} tooltipOn = {true} tooltip={'Producto en la cesta'}
             classTooltip={'span-tooltip-add'}/>: <></>} 
                
            </div>
            <div>
            <ModalComponent title={'Elige la cantidad'} bodyModal={<ItemCount stock={item.stock} initial={0} onAdd={onAdd} handleCloseModalAdd={handleCloseModalAdd} />} 
            isVisibleModal={isVisibleModalAdd} handleCloseModal={handleCloseModalAdd} size={'sm'}/>
            </div>

        </div>

    </div>
 </>
  )
}
