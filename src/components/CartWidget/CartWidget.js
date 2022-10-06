import React from 'react';
import './CartWidget.css';
import useCart from '../../hooks/useCart';

export default function CartWidget(props) {

// const {numberProducts} = props;
const {getTotalProducts} = useCart();

  return (
    <>
      <div className='cart-icon-container'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className='cart-icon' viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
        </svg>
        {getTotalProducts()>0 ? <span className='span-cart'>{getTotalProducts()}</span> : <></>}
      </div>
  
    </>
  )
}
