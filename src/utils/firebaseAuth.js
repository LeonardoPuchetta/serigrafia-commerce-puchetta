import { app } from "./firebaseConfig";


import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword 
,onAuthStateChanged,signOut} from "firebase/auth";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

//registro de usuario 
export const firebaseSignUp = async (email,password) => {

        let user ;
        let firebaseError;

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            user = userCredential.user;
            console.log(user.email)
            
        })
        .catch((error) => {
            
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
    let firebaseError;

    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            user = userCredential.user;
            })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = {
                'auth/wrong-password' : 'Contraseña incorrecta',
                'auth/user-not-found'  : 'El usuario no existe'
            };

            firebaseError = errorMessage[errorCode];
        });
    //retornamos un objeto con usuario y mensaje de error (alguno de los dos es null)
    return ({user,firebaseError})
}

//observador de usuario logeado 
export const firebaseIsUser =  () => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid)
          return user 
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
}

//cerrar sesion 
export const firebaseClose = () => {

    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });

}

