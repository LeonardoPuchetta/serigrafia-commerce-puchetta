import React from 'react'
import useAuth from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";

import './Register.css'


export default function Register(props) {

const {handleCloseModalRegister} = props;

const {user,registerUser,errorRegisterMessage} = useAuth();

const navigate = useNavigate();

const register = (e) => {

    e.preventDefault();

    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;
    const repeatPassword =  e.target.passwordRepeatField.value;

    if(password == repeatPassword){

      registerUser(correo,password);
      //redireccionamiento a la home page
      if(!errorRegisterMessage){
        
      handleCloseModalRegister();
      navigate('/');

      }

    } else {

        const inputPassword = document.getElementById('passwordField');
        const inputRepeatPassword = document.getElementById('passwordRepeatField');
        inputPassword.style.borderColor = "red";
        inputRepeatPassword.style.borderColor = "red";
        const spanAdvice = document.getElementById('span-password-advice');
        spanAdvice.style.display = 'contents'

    }

    if(errorRegisterMessage){
      const spanAdvice = document.getElementById('span-register-advice');
      spanAdvice.style.display = 'contents'
    }

    

}

  return (

<form onSubmit={register} >
<div class="row">
  <div className="form-outline col-12">
    <label className="form-label" htmlFor="nameField">Nombre completo</label>
    <input type="text" pattern="[A-Za-z]*" title="Por favor ingrese solo letras" 
    id="nameField" className="form-control form-input" required/>
  </div>

  <div className="form-outline col-12">
    <label className="form-label" htmlFor="phoneField">Teléfono</label>
    <input type="text" pattern="[0-9]*" title="Por favor ingrese solo números" 
    id="phoneField" className="form-control form-input" required/>
  </div>

  {/* <!-- Email input --> */}
  <div className="form-outline col-12">
    <label className="form-label" htmlFor="emailField">Correo electrónico</label>
    <input type="email" id="emailField" className="form-control form-input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    title='Ingrese un correo valido ejemplo@gmail.com' required/>
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline col-12">
    <label className="form-label" htmlFor="passwordField">Contraseña</label>
    <input type="password" id="passwordField" className="form-control form-input" required/>
  </div>

   {/* <!-- Password input --> */}
   <div className="form-outline col-12">
    <label className="form-label" htmlFor="passwordRepeatField">Repetir contraseña</label>
    <input type="password" id="passwordRepeatField" className="form-control form-input"
    title="Las contraseñas deben ser iguales" required/>
   </div>

  <div className="form-outline col-12">
    <span id='span-password-advice'>Las contraseñas deben ser iguales</span>
  </div>

  <div className="form-outline col-12">
    <span id='span-register-advice'>{errorRegisterMessage}</span>
  </div>

  <div className="form-outline col-12">
    <button type="submit" className="btn btn-primary btn-block col-mb-12 btn-submit-register">Registro</button>
  </div>
</div>
</form>
  )
}
