import React ,{useState}from 'react';
import Button from 'react-bootstrap/Button';
import useAuth from '../../hooks/useAuth';
import './ItemCount.css';

export default function ItemCount(props) {

    const {user} = useAuth();
    const {stock,initial,onAdd,handleCloseModalAdd} = props ;
    const [count,setCount] = useState(initial);

    const countIncrement = () =>{if (count<stock) {setCount(count+1)}}
    const countDecrement = () => {if (count>0) {setCount(count-1)}}
    const onAddItem = () =>{

    
        //si hay stock realizamos la adicion de count productos al carrito
        if(stock>=count && user){
            onAdd(count);
            setCount(0);
            handleCloseModalAdd()
        } else {
            if(!user){
            const divAdvice = document.getElementsByClassName('user-advice');
            divAdvice[0].setAttribute('style','visibility:visible ; display:flex');
            }
            
        }
        
        
    }
 
  return (
    <>
    <div>
        <div className='set-count'>
            <button onClick={countDecrement} className='btn-count'>-</button>
            <strong>{count}</strong>
            <button onClick={countIncrement} className='btn-count'>+</button>
        </div>
        <div className='add-count'>
        { stock && count ? <Button className='btn-add' onClick={onAddItem} variant="outline-success">Agregar al carrito</Button>
            :<Button className='btn-add' onClick={onAddItem} variant="outline-success" disabled>Agregar al carrito</Button>}
        </div>
        <div className='user-advice'>
            <span>Debe estar logeado para realizar compras online</span>
        </div>
    </div>
    </>
  )
}
