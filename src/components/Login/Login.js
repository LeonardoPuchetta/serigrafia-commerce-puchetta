import React from 'react';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";

export default function Login(props) {

const {handleCloseModalLogin} = props   

const {loginUser,errorLoginMessage} = useAuth();

const navigate = useNavigate();

const login = (e) => {

    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;

    loginUser(correo,password);

    if(!errorLoginMessage){
     
      handleCloseModalLogin();
      //redireccionamiento a la home page 
      navigate('/vivero-commerce-puchetta/');
      } else {

      let spanAdvice = document.getElementById('span-login-advice');
      spanAdvice.style.display = 'contents';

      const objectAdviceFunctions = {
        'Contraseña incorrecta': () =>{
          const inputPassword = document.getElementById('passwordField');
          inputPassword.style.borderColor = "red";
        },
        'El usuario no existe': () =>{
          const inputMail = document.getElementById("emailField");
          inputMail.style.borderColor = "red";
        }
      }

      objectAdviceFunctions[errorLoginMessage]()

      }
   
    }


  return (
<>
<form onSubmit={login}>
  {/* <!-- Email input --> */}
  <div className="form-outline col-md-12">
    <label className="form-label" htmlFor="emailField">Correo electronico</label>
    <input type="email" id="emailField" className="form-control form-input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    title='Ingrese un correo valido ejemplo@gmail.com' placeholder='ejemplo@gmail.com' required/> 
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline col-md-12">
    <label className="form-label" htmlFor="passwordField">Contraseña</label>
    <input type="password" id="passwordField" className="form-control form-input" required />
  </div>

  <div className="form-outline col-md-12">
    <span id='span-login-advice'>{errorLoginMessage}</span>
  </div>

  <div className="form-outline col-md-12">
    <button type="submit" className="btn btn-primary btn-block mb-4 btn-submit-login">Login</button>
  </div>

</form>

</>
  )
}
