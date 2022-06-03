import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Countries from './Countries';
import Orders from './Orders';
import Home from './Home';

export default class NavbarComp extends Component {
  render() {
    return (
        <Router>
      <div>
<Navbar collapseOnSelect expand="lg" bg="light" >
  <Container>
  <Navbar.Brand as = {Link} to = {"/orders"}>FIQ</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link as = {Link} to = {"/"}>Home</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as = {Link} to = {"/countries"}>Countries</Nav.Link>
      <Nav.Link as = {Link} to = {"/orders"}>Orders</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
      <div>
      <Routes>
          <Route exact path="/" element = {<Home/>}/>
          <Route exact path="/countries" element = {<Countries/>}/>
          <Route exact path="/orders" element = {<Orders/>}/>
        </Routes>
      </div>
      </Router>
    )
  }
}
