import React , {useState, createContext} from 'react';


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

       if (isInCart(item.id) === false){

          setCart(cart => [...cart,newProduct]);
        
            } else {
              alert('El producto ya existe en el carrito ,revisa tu carrito o prueba agregar otros productos')
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
    // funcion que nos da la cantidad total de productos 
    const getTotalProducts = () =>{

        let total = 0;

        Array.from(cart).forEach((product)=>{
            
            total += product.quantity
        });
        
        return total 
    }
    // funcion que nos da el precio total por item del carrito
    const getTotalPriceItem = (item,quantity) => {
            return (item.price*quantity)
    }
    //funcion que nos da el monto total de la compra 
    const getTotalPrice = () =>{

        let total = 0;

        Array.from(cart).forEach((product)=>{
            
            total += product.item.price*product.quantity
        });
        
        return total 
    }
    //funcion que nos da la lista de productos para guardar en la orden de compra 
    const getItemList = () =>{

        let itemList = [];
        cart.map((product) => { 
            return itemList.push({
                "id" : product.item.id,
                "title" : product.item.name,
                "price" : product.item.price,
                "quantity": product.quantity
            })
        })

        return itemList
    }


    return <CartContext.Provider 
            value={{cart,clearCart,removeItem,
                    addItem,getTotalProducts,
                    getTotalPriceItem,getTotalPrice,getItemList,isInCart
                    }}>
                {children}
            </CartContext.Provider>
}










