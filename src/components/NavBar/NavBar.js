import React from 'react';

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
      <Navbar.Brand href="#home"> 
        <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}ConQuePoquito
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" >
          <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Afiches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Parches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Otros trabajos</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Quienes Somos</Nav.Link>
        </Nav>
        { !isLoging ? <>
        <Nav pullright="true">
          <Nav.Link href="#link" >signIn</Nav.Link>
        </Nav>
        <Nav pullright="true">
          <Nav.Link href="#link">login</Nav.Link>
        </Nav> </> : <></> }
        <Nav pullright="true">
          <Nav.Link href="#link">
            <CartWidget/>
          </Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
</Navbar>
    )
}

