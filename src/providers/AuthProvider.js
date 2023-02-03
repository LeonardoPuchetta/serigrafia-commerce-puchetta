import React , {useState, createContext} from 'react';

import {firebaseSignIn,firebaseIsUser,firebaseSignUp,firebaseClose,createUserFetch } from '../utils/firebaseAuth';

export const AuthContext = createContext();

export default function AuthProvider(props){

    const {children} = props ; 
    const [user,setUser] = useState(null);

    const [errorRegisterMessage,setErrorRegisterMessage] = useState(null);
    const [errorLoginMessage,setErrorLoginMessage] = useState(null);

     //signUp/register
     const registerUser = (email,password,name,phone) => {

        firebaseSignUp(email,password,name,phone).then(data =>{
        if (data['user']){
          setUser(data['user'])
        } else {
            if (data['firebaseError']){setErrorRegisterMessage(data['firebaseError'])}
                }
        })
        }

    //signIn/login
    const loginUser = (email,password)=>{

        firebaseSignIn(email,password).then(data =>{
            if (data['user']){

                // const userObject = {
                //     'email': data['user'].email,
                //     'id': data['user'].uid
                // }
                setUser(data['user'])
        } else {
            if (data['firebaseError']){
                setErrorLoginMessage(user['firebaseError'])
            }
        }
        })
    }

    //cierre de sesion 
    const logoutUser = () => {
        firebaseClose();
        setUser(null);
    }
 


    return <AuthContext.Provider 
            value={{user,loginUser,registerUser,logoutUser,errorLoginMessage,errorRegisterMessage}}    >
                {children}
            </AuthContext.Provider>

}