import { app } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword 
,signOut} from "firebase/auth";
import { getUserFetch,createUserFetch } from "./firebaseFetch";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

//registro de usuario 
export const firebaseSignUp = async (email,password,name,phone) => {

        let user ;
        let firebaseError;

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //guardamos usuarios en la base de datos 
            let userToDataBase = {
                'name' : name,
                'email' : userCredential.user.email,
                'uid' : userCredential.user.uid,
                'phone': phone,
                'role':'client'
            };
            user = userToDataBase;
            createUserFetch(userToDataBase); 
            
        })
        .catch((error) => {
            //Errores de autenticacion
            const errorCode = error.code;
            const errorMessage = {
                'auth/email-already-in-use' : 'El correo ya esta en uso',
                'auth/weak-password': 'La contraseña elegida es muy debil'
            };
            firebaseError = errorMessage[errorCode];
          
        });
        //retornamos un objeto con usuario y mensaje de error (alguno de los dos es null)
        return ({user,firebaseError})
       
}

//logeo de usuario 
export const firebaseSignIn = async (email,password) => {
    
    let user ; 
    let userFromFireBase;
    let firebaseError;
   
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        userFromFireBase= userCredential
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = {
                'auth/wrong-password' : 'Contraseña incorrecta',
                'auth/user-not-found'  : 'El usuario no existe'
            };
            firebaseError = errorMessage[errorCode];
        });

    await getUserFetch(userFromFireBase.user.uid).then(result =>{ user = result })
 
    //retornamos un objeto con usuario y mensaje de error (alguno de los dos es null)
    return ({user,firebaseError})
    }   
    
//cerrar sesion 
export const firebaseClose = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });

}




