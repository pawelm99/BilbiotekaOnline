import Button from 'react-bootstrap/Button';
  import Container from 'react-bootstrap/Container';
  import Form from 'react-bootstrap/Form';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import NavDropdown from 'react-bootstrap/NavDropdown';
  import Offcanvas from 'react-bootstrap/Offcanvas';
  
  


function NavbarApp() {
  
    return (
      <>
        
          <Navbar key={'xl'} bg="light" expand={'xl'} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#">BestReads</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-xl`}
                aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/Cards">BookShop</Nav.Link>
                    <Nav.Link href="/AddBook">AddBooksAdmin</Nav.Link>
                    <NavDropdown
                      title="Strefa klienta"
                      id={`offcanvasNavbarDropdown-expand-xl`}
                    >
                      <NavDropdown.Item href="/Login">
                        Login
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Rejestracja
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title="Category"
                      id={`offcanvasNavbarDropdown-expand-xl`}
                    >
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        
      </>
    );
  }
  

export default NavbarApp