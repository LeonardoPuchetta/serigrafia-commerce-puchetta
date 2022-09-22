import React,{useState,useEffect} from 'react';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import CartItem from '../CartItem';
import './Cart.css'

export default function Cart() {

const {cart,getTotalProducts
  ,getTotalPrice,clearCart} = useCart();


const styleImage = {
  'width': '10rem',
  'height':'10rem'
}

  return (
    <>
    
    { (cart.length > 0) ? 
    
    <div className='container container-cart'>

        <div className='btn-options'>
            <Link to='/'><Button>Continuar comprando</Button></Link>
            <Button onClick={()=>{clearCart()}}>Vaciar carrito</Button> 
        </div>

        <div className='products-list'>
            <div className='products-detail-container'>
                {cart.map((product) => {
                    return (
                    
                      <CartItem key={product.item.id} product={product} />
                       
                    )
                })}
          </div>
          <div className='order-summary'>
                <h5>Resumen de compra</h5>
                <div className='order-summary-total-products'>
                    Numero de productos : {getTotalProducts()}
                </div>
                <div className='order-summary-total-products'>
                    <strong>Total : </strong> {getTotalPrice()} $
                </div>
                <div>
                  <Button>Continuar compra</Button>
                </div>
          </div>
        </div>
       
    </div> 
    : <>
      <div className='container'>
           <h5>El carrito esta vacio</h5> 
           <Link to='/'><Button>Continuar comprando</Button></Link>      
      </div>
      </>}
    </>
  )
}
