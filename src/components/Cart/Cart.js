import React ,{useState}from 'react';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ModalComponent from '../ModalComponent';



import { serverTimestamp ,doc ,setDoc,collection ,updateDoc,increment} from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig';

import CartItem from '../CartItem';
import './Cart.css';


export default function Cart() {

const [isVisibleModal,setIsVisibleModal] = useState(false);

const handleCloseModal = () => {
  setIsVisibleModal(false)
  clearCart();

};


const {cart,getTotalProducts,getTotalPrice,clearCart,getItemList} = useCart();

const createOrder = async () =>{

    let order = {
              buyer: {
                name: "Leonardo Puchetta",
                email:"leonardopuchetta21@gmail.com",
                phone: "091359563"
              },
              date : serverTimestamp(),
              items: getItemList(),
              total: getTotalPrice(),
    };

    const newOrderRef = doc(collection(db, "orders"));
    await setDoc(newOrderRef, order);

    //actualizar stocks en la base 
    getItemList().map(async (item)=>{
        const itemRef = doc(db, "products", item.id); 

        await updateDoc(itemRef, {
          stock : increment (-item.quantity)
        });
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
                        Numero de productos : {getTotalProducts()}
                    </div>
                    <div className='order-summary-total-products'>
                        <strong>Monto total : </strong> {getTotalPrice()} $
                    </div><hr></hr>
                    <div>
                      <Button variant="outline-success" onClick={()=> createOrder()}>Registrar compra</Button>
                    </div>
                    <div>
                          <ModalComponent title='Compra registrada !' isVisibleModal={isVisibleModal}
                          bodyModal='Gracias por comprar en El Vivero' handleCloseModal={handleCloseModal}/>
                    </div>
              </div>
        </div>
       
    </div> 
    : <>
      <div className='container '>
           <h5>El carrito esta vacio</h5> 
           <Link to='/'><Button variant="success" >Continuar comprando</Button></Link>      
      </div>
      </>}
    </>
  )
}
