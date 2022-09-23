import React , {useState , useEffect , createContext} from 'react';


export const CartContext = createContext();


export default function CartProvider(props){

    const {children} = props ; 
 
    //nuestro carrito sera un array de object , cada object representa un producto
    const [cart, setCart] = useState([]);

    

    //funcion para agregar productos al carrito 
    const addItem = (item,quantity) =>{
        const newProduct = {
            "item":item,
            "quantity":quantity
        }
        

       if (isInCart(item.id)===false){
          setCart(cart => [...cart,newProduct]);
        

            } else {
                alert('El producto ya existe en el carrito')
            }
            
    }

    //funcion para remover producto del carrito 
    const removeItem = (itemId)=>{
    
        let newCart = cart.filter(product=> product.item.id !== itemId);
        setCart(newCart);

       
    
    }

    // funcion para vaciar carrito
    const clearCart = () =>{
        setCart([]);
        
    }

    // funcion para chequear si un producto esta en el carrito
    const isInCart = (id) => {

        let isIn = false ; 
        
        Array.from(cart).forEach((product)=>{
            
            if (product.item.id === id){
                isIn = true 
            }
        
        })

        return isIn
    }

    const getTotalProducts = () =>{

        let total = 0;

        Array.from(cart).forEach((product)=>{
            
            total += product.quantity
        });
        
        return total 
    }

    const getTotalPriceItem = (item,quantity) => {
            return (item.price*quantity)
    }

    const getTotalPrice = () =>{

        let total = 0;

        Array.from(cart).forEach((product)=>{
            
            total += product.item.price*product.quantity
        });
        
        return total 
    }



    return <CartContext.Provider 
            value={{cart,clearCart,removeItem,
                    addItem,getTotalProducts,
                    getTotalPriceItem,getTotalPrice,

                    }}>
                {children}
            </CartContext.Provider>
}










