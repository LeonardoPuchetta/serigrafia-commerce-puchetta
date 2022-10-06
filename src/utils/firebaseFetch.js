import { db } from "./firebaseConfig";
import { collection, getDocs,getDoc ,query, where ,doc,
  serverTimestamp,increment,setDoc,updateDoc} from "firebase/firestore";


// peticion de detalle de items 
export const getItemDetailFetch = async (idItem) => {

    //constante para query
    const docRef = doc(db, "products", idItem);

    let dataFromFirestore;

   await getDoc(docRef).then(result =>{
      
        dataFromFirestore = {
          id:result.id,
          ...result.data()
        }
        // setDato(dataFromFirestore)
      }).catch(error => {
        console.log(error)
      })

      return dataFromFirestore
    
}
// peticion de lista de items 
export const getItemListFetch = async (idCategory) =>{

    let queryConfig ;
    //configuracion de la query 
    if (idCategory !== undefined){
        queryConfig = query(collection(db,'products'),where('category','array-contains',idCategory))
    } else {
      queryConfig = query(collection(db,'products'))
    };

    let dataFromFirestore;
    await getDocs(queryConfig).then(result =>{
    //usamos .docs para pasar de datos binarios a objetos js
    dataFromFirestore = result.docs.map( item => ({
                          id:item.id,
                          ...item.data()
                          }))
    })
    .catch(error =>{console.log(error)})

    return dataFromFirestore
}

//creacion de orden de compra
export const createOrderFetch = async (itemList,totalPrice) => {

  let order = {
    buyer: {
      name: "Leonardo Puchetta",
      email:"leonardopuchetta21@gmail.com",
      phone: "091359563"
    },
    date : serverTimestamp(),
    items: itemList,
    total: totalPrice,
  };

  const newOrderRef = doc(collection(db, "orders"));

  await setDoc(newOrderRef, order);

  //actualizar stocks en la base 
  itemList.map(async (item)=>{
    
      const itemRef = doc(db, "products", item.id); 

      await updateDoc(itemRef, {
        stock : increment (-item.quantity)
      });
  })
  
  return order


}