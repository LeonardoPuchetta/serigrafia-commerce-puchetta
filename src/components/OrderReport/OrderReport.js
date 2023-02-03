import React from 'react';
import './OrderReport.css';
export default function OrderReport(props) {

    const {order} = props ;


  return (
    <>
    <table className='table-order'>
        <thead>
          <tr>
            <th className='th-order'>Usuario</th>
            <th className='th-order'>Id de compra</th>
          </tr>
        </thead>
        <tbody>
        <tr >
                <td className='td-order'>{order['buyer']['email']}</td>
                <td className='td-order'>{order['id']}</td> 
      
              </tr>
        </tbody>
    </table>

    <table className='table-order'>
        <thead>
          <tr>
            <th className='th-order'>Artículo</th>
            <th className='th-order'>Precio</th>
            <th className='th-order'>Cantidad</th>
            <th className='th-order'>Subtotal</th>
          </tr>
        </thead>
        <tbody>
        {order['items'].map((item) => {
              return (
                <tr key={item.title}>
                <td className='td-order'>{item.title}</td>
                <td className='td-order'>$ {item.price}</td> 
                <td className='td-order'  >{item.quantity}</td>
                <td className='td-order'>$ {item.price*item.quantity}</td>
              </tr>
              )})}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className='td-order'>Total</td>
            <td className='td-order'>$ {order['total']}</td>
          </tr>
        </tfoot>
    </table>
    </>
  )
}
