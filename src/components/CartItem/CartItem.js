import React from 'react';
import useCart from '../../hooks/useCart';
import { Button } from 'react-bootstrap';

import './CartItem.css'

export default function CartItem(props) {

const {product} = props

const {getTotalPriceItem,removeItem} = useCart();

const styleImage = {
    'width': '8rem',
    'height':'8rem'
  }

  return (
    <>
                        <div className='product-detail border'>
                              <div className='product-detail-image' >
                                <img src={product.item.imageUrl} style={styleImage}/>
                              </div>

                              <div className='product-detail-name'>
                                <h5>Producto : {product.item.name}</h5>
                              </div>
                              
                              <div className='product-detail-count'>
                                    <div  className='product-detail-item-info'>
                                        {product.quantity} unidades / $ {product.item.price} cada una  
                                    </div>
                                    
                                    <div  className='product-detail-total'>
                                         {getTotalPriceItem(product.item,product.quantity)} $
                                    </div> 
                              </div>
                              <div className='product-detail-delete'>
                                <Button onClick={() => removeItem(product.item.id)} variant="outline-danger">Quitar del carrito</Button>
                              </div>
                        </div>
                      </>
  )
}
