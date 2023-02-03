import { db,storage} from "./firebaseConfig";

import { ref ,uploadBytesResumable,getDownloadURL} from "firebase/storage";

import { collection, getDocs,getDoc ,query, where ,doc,
  serverTimestamp,increment,setDoc,updateDoc} from "firebase/firestore";

// creacion de user en la base 
export const createUserFetch = async (user) => {
  const newUserRef = doc(collection(db, "users"));
  await setDoc(newUserRef, user);
  return user 
}

//recuperacion de user mediante uid de Authentication 
export const getUserFetch = async (uid) => {
    let user ;
    let queryConfig = query(collection(db,'users'),where('uid','==',uid))

    await getDocs(queryConfig).then(result =>{

    user = result.docs.map( item => ({
      ...item.data()
        }))[0]

    }).catch(error =>{console.log(error)})

    return user

}

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
export const createOrderFetch = async (itemList,totalPrice,user) => {

  let order = {
    buyer: user,
    date : serverTimestamp(),
    items: itemList,
    total: totalPrice,
    id: ''
  };

  const newOrderRef = doc(collection(db, "orders"));

  //creacion de nueva orden
  await setDoc(newOrderRef, order);
  //guardamos id de objeto en firebase
  order.id = newOrderRef.id;

  //actualizar stocks en la base 
  itemList.map(async (item)=>{
    
      const itemRef = doc(db, "products", item.id); 

      await updateDoc(itemRef, {
        stock : increment (-item.quantity)
      });
  })
  
  return order


}

export const createNewProductFetch = async (product) =>{

  const newProductRef = doc(collection(db, "products"));

  await setDoc(newProductRef, product);

}
//guardado de imagen del producto en el storage de firebase
export const imageProductUploaderFetch = async (image,name) =>{

  // Crear referencia de almacenamiento en Firebase de las imagenes 
   const imagesRef = ref(storage,`product-images/${name}`);

  // Subir imagen a Firebase Storage

  const uploadTask = uploadBytesResumable(imagesRef,image);
  return new Promise((resolve, reject) => {
    uploadTask.on('state_changed', 
      (snapshot) => {
      }, 
      (error) => {
        // Handle unsuccessful uploads
        reject(error)
      }, 
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          resolve(downloadURL);
        });
      }
    )
  })

}



