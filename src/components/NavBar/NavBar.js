import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from '../CartWidget';

import './NavBar.css'

import logo from './../../assets/hojas.png';

export default function NavBar(props) {

const isLoging = false ; 

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
          <Link to='/about'className='navbar-link'>Quienes Somos</Link>
        </Nav>
        
        { !isLoging ? <>
        <Nav pullright="true">
          <Link to='/register' className='navbar-link'>Registro</Link>
        </Nav>
        <Nav pullright="true">
          <Link to='/login' className='navbar-link'>Login</Link>
        </Nav> </> : <></> }
        <Nav pullright="true">
          <Link to='/cart' className='navbar-link'>
            <CartWidget/>
          </Link>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
</Navbar>
    )
}



