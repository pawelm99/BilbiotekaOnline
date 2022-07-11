import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';



function NavbarApp() {
  return (
    <Navbar bg='dark' variant='dark' sticky='top' expand="lg">
    <Navbar.Brand>
       Library
    </Navbar.Brand>

    <Navbar.Toggle/>
    <Navbar.Collapse>

   
  
    <Nav>
      <Nav.Link as={Link} to={"/Books"} href = "Books">Books</Nav.Link>
    </Nav>

    </Navbar.Collapse>

  </Navbar>
  )
}

export default NavbarApp