import React from 'react'

import {Nav, Navbar, NavDropdown} from 'react-bootstrap';



function NavbarApp() {
  return (
    <Navbar bg='dark' variant='dark' sticky='top' expand="lg">
    <Navbar.Brand>
       App
    </Navbar.Brand>

    <Navbar.Toggle/>
    <Navbar.Collapse>

   
  
    <Nav>
      <NavDropdown title ="Products">
        <NavDropdown.Item href="products/tea">Tea</NavDropdown.Item>
      </NavDropdown>

    </Nav>

    </Navbar.Collapse>

  </Navbar>
  )
}

export default NavbarApp