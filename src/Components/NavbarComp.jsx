import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

/*Den responsiva menyn*/
export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home">START</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link as={Link} to="/Global/global">Global temp</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Test</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Test</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Test</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        );
    }
}