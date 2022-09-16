import React ,{useState}from 'react';
import Button from 'react-bootstrap/Button';



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
        <div className='row-btn-count' >
            <div className='btn-count'>
                <Button size="md"onClick={countDecrement} className='btn-count'>-</Button>
            </div>
            <div className='col-count'>
                {count}
            </div>
            <div className='btn-count'>
                <Button size="md" onClick={countIncrement} className='btn-count'>+</Button>
            </div>
        </div>
        <div className='row-btn-add' >
            { stock && count ? <Button className='btn-add' onClick={onAddItem} >Agregar al carrito</Button> :
            <Button className='btn-add' onClick={onAddItem} disabled>Agregar al carrito</Button>}
        </div>
    </div>
    </>
  )
}
