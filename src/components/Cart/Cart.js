import React ,{useState}from 'react';
import useCart from '../../hooks/useCart';
import useAuth from './../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {BsBagXFill} from 'react-icons/bs';
import { createOrderFetch } from '../../utils/firebaseFetch';


import CartItem from '../CartItem';
import ModalComponent from '../ModalComponent';
import OrderReport from '../OrderReport';


import './Cart.css';

export default function Cart() {


const {user} = useAuth();
const {cart,getTotalProducts,getTotalPrice,clearCart,getItemList} = useCart();

const [isVisibleModal,setIsVisibleModal] = useState(false);
const [order,setOrder] = useState();

const handleCloseModal = () => {

  setIsVisibleModal(false);
  //una vez cerrado el modal limpiamos el carrito
  clearCart();

};

const createOrder = async () =>{

    let itemList = getItemList();
    let totalPrice = getTotalPrice();

    await createOrderFetch(itemList,totalPrice,user).then((result,id) =>{
      setOrder(result);
    }).catch(error =>{
      console.log(error)
    })

    setIsVisibleModal(true); 
}

  return (
    <>
    
    { (cart.length > 0) ? 
    
    <div className='container container-cart'>

        <div className='btn-options'>
            <Link to='/'><Button variant="outline-success">Continuar comprando</Button></Link>
            <Button  variant="outline-danger" onClick={()=>{clearCart()}}>Vaciar carrito</Button> 
        </div>
        <div className='products-list'>
              <div className='products-detail-container'>
                    {cart.map((product) => {
                        return (
                          <CartItem key={product.item.id} product={product} /> 
                        )
                    })}
              </div>
              <div className='order-summary border'>
                    <h5>Resumen de compra</h5><hr></hr>
                    <div className='order-summary-total-products'>
                        Numero de productos : <strong>{getTotalProducts()}</strong>
                    </div>
                    <div className='order-summary-total-products'>
                        <strong>Monto total : $ {getTotalPrice()} </strong>
                    </div><hr></hr>
                    <div>
                      <Button variant="outline-success" onClick={()=> createOrder()}>Registrar compra</Button>
                    </div>
                    <div>
                          <ModalComponent title='Compra registrada !' isVisibleModal={isVisibleModal}
                      handleCloseModal={handleCloseModal} bodyModal={<OrderReport order={order}/>}/>
                    </div>
              </div>
        </div>
       
    </div> 
    : <>
    {/* si no hay productos en el carrito */}
      <div className='container container-cart container-empty-cart'>
        <div className='container-empty-cart'>

          <div><h5>El carrito esta vacio</h5> </div>
          <div className='icon-empty-div'><span><BsBagXFill/></span></div>
          <div><Link to='/'><Button variant="success" >Ir a la tienda</Button></Link></div>
          
        </div> 
      </div>
      </>}
    </>
  )
}
