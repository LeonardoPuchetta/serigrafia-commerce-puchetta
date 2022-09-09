import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from '../CartWidget';

import './NavBar.css'

import logo from './../../assets/logo.svg'



export default function NavBar(props) {

const isLoging = false ; 

  return (
<Navbar  expand="lg" className='header-navbar'>
    <Container>
      <Navbar.Brand > 
        <Link to='/' className='navbar-link'>
          <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}Vivero
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" >
          <NavDropdown title="Plantas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/plantas-anuales">Plantas anuales</NavDropdown.Item>
              <NavDropdown.Item href="/category/plantas-perennes">Plantas perennes</NavDropdown.Item>
              <NavDropdown.Item href="/category/plantas-interior">De interior</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/category/arbustos">Arbustos</Nav.Link>
          <Nav.Link href="/category/arboles">Arboles</Nav.Link>
          <Nav.Link href="/category/huerta-organica">Huerta organica</Nav.Link>
          <Nav.Link href="/about">Quienes Somos</Nav.Link>
        </Nav>
        { !isLoging ? <>
        <Nav pullright="true">
          <Nav.Link href="/register" >Registro</Nav.Link>
        </Nav>
        <Nav pullright="true">
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav> </> : <></> }
        <Nav pullright="true">
          <Nav.Link href="/">
            <CartWidget numberProducts={6}/>
          </Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
</Navbar>
    )
}



