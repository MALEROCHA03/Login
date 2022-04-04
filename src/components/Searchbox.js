

import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Navbar, Nav,  NavDropdown, 
   Container } from 'react-bootstrap';
export const Searchbox = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <Navbar  expand="lg" className="nav">
    <Container>
      <Navbar.Brand href="#home">
      <div className="headind_srch">
      <div className="recent_heading mt-2">
        <h4>{auth.name}</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <box-icon
            onClick={logout}
            name="exit"
            type="solid"
            color="#ffffff"
            style={{ cursor: "pointer" }}
          ></box-icon>
        </div>
      </div>
    
    </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-Desplegable">
            <NavDropdown.Item href="#action/3.1">Accióm</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Python</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">React</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Bootstrap</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
  );
};
