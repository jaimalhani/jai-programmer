import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
 
 
import {Navbar , Container , NavDropdown, Nav, Form , FormControl , Button , Offcanvas} from 'react-bootstrap';

 import "./../CSS/style.css"
 
function navbr() {
 
  return (
 
<div>
 
 

<Navbar collapseOnSelect expand="lg" className="headerbg">
  <Container>
  <Navbar.Brand href="#home" className="text-primary" >Jai-Programer</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#features" className="text-light">Home</Nav.Link>
      <Nav.Link href="#pricing" className="text-primary">About</Nav.Link>
      <Nav.Link href="#pricing" className="text-primary">Services</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
 
      
 
   );
}

export default navbr;
