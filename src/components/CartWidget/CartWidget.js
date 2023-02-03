import React from 'react';
import './CartWidget.css';
import useCart from '../../hooks/useCart';
import {BsFillBagFill} from 'react-icons/bs';

export default function CartWidget(props) {
  
const {getTotalProducts} = useCart();

  return (
    <>
      <div className='cart-icon-container'>
        <BsFillBagFill className='cart-icon'/>
        <span className='span-cart'>{getTotalProducts()}</span>
      </div>
  
    </>
  )
}
