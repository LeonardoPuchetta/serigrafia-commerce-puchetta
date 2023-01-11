import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';

import IconButton from './../IconButton/IconButton';
import {RiLoginBoxFill} from 'react-icons/ri';
import {RiLogoutBoxFill} from 'react-icons/ri';
import {FaUserEdit} from 'react-icons/fa';


import ModalComponent from '../ModalComponent';
import Login from '../Login';
import Register from '../Register';


import './NavBar.css'

import logo from './../../assets/hojas.png';

export default function NavBar(props) {

const {user,logoutUser} = useAuth();

const navigate = useNavigate();

const [isVisibleModalLogin,setIsVisibleModalLogin] = useState(false);
const [isVisibleModalRegister,setIsVisibleModalRegister] = useState(false);

const handleCloseModalLogin = () =>{
  setIsVisibleModalLogin(false)
}
const handleCloseModalRegister = () =>{
  setIsVisibleModalRegister(false)
}

const logout = () =>{

  logoutUser();
  //redireccionamiento a la home page 
  navigate('/')
}




  return (
<Navbar  expand="lg" className='header-navbar'>
    <Container>
      <Navbar.Brand > 
        <Link to='/' className='navbar-link-img'>
          <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top icon-image"
              /><span className='name-commerce'> Suculenta </span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" >
          <NavDropdown title="Plantas" id="basic-nav-dropdown" className='dropdown-menu-navbar'>
              <Link to='/category/plantas-anuales' className='navbar-link'>Anuales</Link><br/>
              <Link to='/category/plantas-perennes' className='navbar-link'>Perennes</Link><br/>
              <Link to='/category/plantas-interior' className='navbar-link'>De interior</Link><br/>
          </NavDropdown>
          
          <Link to='/category/arbustos' className='navbar-link'>Arbustos</Link>
          <Link to='/category/arboles' className='navbar-link'>Arboles</Link>
          <Link to='/category/huerta-organica'className='navbar-link'>Huerta organica</Link>
          <Link to='/about'className='navbar-link'>Nosotros</Link>
        </Nav>
        
        { !user ? 
          <>
            <ModalComponent title={'Registro de usuario'} bodyModal={<Register handleCloseModalRegister={handleCloseModalRegister}/>} isVisibleModal={isVisibleModalRegister}
            handleCloseModal={handleCloseModalRegister}/>
              <IconButton icon={<FaUserEdit/>} onClick={()=> setIsVisibleModalRegister(true)} 
                tooltipOn = {true} tooltip={'registro'}/>


            <ModalComponent title={'Login de usuario'} bodyModal={<Login handleCloseModalLogin={handleCloseModalLogin}/>} 
            isVisibleModal={isVisibleModalLogin} handleCloseModal={handleCloseModalLogin}/>
              <IconButton icon={<RiLoginBoxFill/>} onClick={()=> setIsVisibleModalLogin(true)} 
              tooltipOn = {true} tooltip={'login'}/>
              
          </> :
          <>
            <Nav pullright="true">
              <IconButton icon={<RiLogoutBoxFill/>} onClick={logout} tooltipOn = {true} tooltip={'logout'}/>
            </Nav>
          </> }

        {user? <>
        <Nav pullright="true">
          <Link to='/cart' >
            <CartWidget/>
          </Link>
        </Nav> </> :
        <></>
        }
        
        
      </Navbar.Collapse>
    </Container>

</Navbar>
    )
}



