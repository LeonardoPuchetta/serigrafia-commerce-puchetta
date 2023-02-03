import React from 'react';
import useCart from '../../hooks/useCart';
import { Button } from 'react-bootstrap';

import './CartItem.css'

export default function CartItem(props) {

const {product} = props

const {getTotalPriceItem,removeItem} = useCart();

const styleImage = {
    'width': '7.5rem',
    'height':'7.5rem'
  }

  return (
    <>
                        <div className='product-detail border'>
                              <div className='product-detail-image' >
                                <img src={product.item.imageUrl} style={styleImage} alt='product' />
                              </div>

                              <div className='product-detail-name'>
                                <span>{product.item.name}</span>
                              </div>
                              
                              <div className='product-detail-count'>
                                    <div  className='product-detail-item-info'>
                                        {product.quantity} unidades / $ {product.item.price} cada una  
                                    </div>
                                    
                                    <div  className='product-detail-total'>
                                    <strong>Subtotal:  </strong> $ {getTotalPriceItem(product.item,product.quantity)}
                                    </div> 
                              </div>
                              <div className='product-detail-delete'>
                                <Button onClick={() => removeItem(product.item.id)} variant="outline-danger">Quitar del carrito</Button>
                              </div>
                        </div>
    </>
  )
}
