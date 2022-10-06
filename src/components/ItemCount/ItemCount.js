import React ,{useState}from 'react';
import Button from 'react-bootstrap/Button';

import AnimatedButton from '../AnimatedButton';



import './ItemCount.css'


export default function ItemCount(props) {

    const {stock,initial,onAdd} = props ;

    const [count,setCount] = useState(initial);


    const countIncrement = () =>{if (count<stock) {setCount(count+1)}}

    const countDecrement = () => {if (count>0) {setCount(count-1)}}

    const onAddItem = () =>{
        //si hay stock realizamos la adicion de count productos al carrito
        if(stock>=count){onAdd(count)}
        setCount(0);
        
    }
 
  return (
    <>
    <div className='item-count'>
        <div className='row-text-count'>
                <span>Selecciona la cantidad de productos </span>
        </div>
        <div className='row-btn-count' >
            
            <div className='btn-count'>
                <button size="md"onClick={countDecrement} className='btn-count'>-</button>
            </div>
            <div className='col-count'>
                <strong>{count}</strong>
            </div>
            <div className='btn-count'>
                <button size="md" onClick={countIncrement} className='btn-count'>+</button>
            </div>
        </div>
        <div className='row-btn-add' >
            { stock && count ? 
                <AnimatedButton functionButton={onAddItem} type={'add-count'} text={'Agregar al carrito'}/>
            // <Button className='btn-add' onClick={onAddItem} variant="outline-success">Agregar al carrito</Button> 
            :<Button className='btn-add' onClick={onAddItem} variant="outline-success" disabled>Agregar al carrito</Button>}
        </div>
        
       
    </div>
    </>
  )
}
