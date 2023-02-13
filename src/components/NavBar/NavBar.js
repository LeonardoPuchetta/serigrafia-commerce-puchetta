import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';

import IconButton from './../IconButton/IconButton';
import {RiLoginBoxFill} from 'react-icons/ri';
import {RiLogoutBoxFill} from 'react-icons/ri';
import {FaUserEdit} from 'react-icons/fa';
import {AiFillFileAdd} from 'react-icons/ai';

import ModalComponent from '../ModalComponent';
import Login from '../Login';
import Register from '../Register';
import AddProductForm from '../AddProductForm';


import './NavBar.css'

import logo from './../../assets/hojas.png';

export default function NavBar(props) {

const {user,logoutUser} = useAuth();
const {clearCart} = useCart();

const navigate = useNavigate();

const [isVisibleModalLogin,setIsVisibleModalLogin] = useState(false);
const [isVisibleModalRegister,setIsVisibleModalRegister] = useState(false);
const [isVisibleModalAddProduct,setIsVisibleModalAddProduct] = useState(false);

const handleCloseModalLogin = () =>{
  setIsVisibleModalLogin(false)
}
const handleCloseModalRegister = () =>{
  setIsVisibleModalRegister(false)
}

const handleCloseModalAddProduct = () =>{
  setIsVisibleModalAddProduct(false)
}



const logout = () =>{

  clearCart();
  logoutUser();
  //redireccionamiento a la home page 
  navigate('/')
}




  return (
<Navbar  expand="lg" className='header-navbar'>
    <Container>
      <Navbar.Brand > 
        <Link to={process.env.PUBLIC_URL + '/'} className='navbar-link-img'>
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
              <Link to={process.env.PUBLIC_URL + '/category/plantas-anuales'} className='navbar-link'>Anuales</Link><br/>
              <Link to={process.env.PUBLIC_URL + '/category/plantas-perennes'}  className='navbar-link'>Perennes</Link><br/>
              <Link to={process.env.PUBLIC_URL + '/category/plantas-interior'} className='navbar-link'>De interior</Link><br/>
          </NavDropdown>
          
          <Link to={process.env.PUBLIC_URL + '/category/arbustos'}  className='navbar-link'>Arbustos</Link>
          <Link to={process.env.PUBLIC_URL + '/category/arboles' } className='navbar-link'>Arboles</Link>
          <Link to={process.env.PUBLIC_URL + '/category/huerta-organica'} className='navbar-link'>Huerta organica</Link>
          <Link to={process.env.PUBLIC_URL + '/about'} className='navbar-link'>Nosotros</Link>
        </Nav>
        
        { !user ? 
          <>
            <ModalComponent title={'Registro de usuario'} bodyModal={<Register handleCloseModalRegister={handleCloseModalRegister}/>} isVisibleModal={isVisibleModalRegister}
            handleCloseModal={handleCloseModalRegister} size={'sm'}/>
              <IconButton icon={<FaUserEdit/>} onClick={()=> setIsVisibleModalRegister(true)} 
                tooltipOn = {true} tooltip={'registro'} classIcon={'icon-button'} classTooltip={'span-tooltip'}/>


            <ModalComponent title={'Login de usuario'} bodyModal={<Login handleCloseModalLogin={handleCloseModalLogin}/>} 
            isVisibleModal={isVisibleModalLogin} handleCloseModal={handleCloseModalLogin} size={'sm'}/>
              <IconButton icon={<RiLoginBoxFill/>} onClick={()=> setIsVisibleModalLogin(true)} 
              tooltipOn = {true} tooltip={'login'} classIcon={'icon-button'} classTooltip={'span-tooltip'}/>
              
          </> :
          <>
            <Nav pullright="true">
              <IconButton icon={<RiLogoutBoxFill/>} onClick={logout} tooltipOn = {true} tooltip={'logout'}
              classIcon={'icon-button'} classTooltip={'span-tooltip'}/>
            </Nav>
          </> }
          {
            (user && user.role =='admin') ?
             <>
            <ModalComponent title={'Agregar producto'} bodyModal={<AddProductForm handleCloseModalAddProduct={handleCloseModalAddProduct}/>} isVisibleModal={isVisibleModalAddProduct}
                handleCloseModal={handleCloseModalAddProduct} size={'lg'}/>
            <IconButton icon={<AiFillFileAdd/>} onClick={()=> setIsVisibleModalAddProduct(true)} 
                tooltipOn = {true} tooltip={'agregar producto'} classIcon={'icon-button'} classTooltip={'span-tooltip'}/>
            </> : <></>
          }
        {user? <>
        <Nav pullright="true">
          <Link to={process.env.PUBLIC_URL + '/cart'} >
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



