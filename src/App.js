import './App.scss';

import { Collapse, Container, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { useState } from 'react';

import AboutPage from './app/pages/about.page';
import ContactPage from './app/pages/contact.page';
import HomePage from './app/pages/home.page';
import Logo from "./app/assets/logo.svg";
import ServicesHomePage from './app/pages/services.page';
import SuppliesHomePage from './app/pages/supplies.page';

let App = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Container>
        <Navbar color="dark" dark expand="md" className="p-4 border-bottom border-primary">
          <NavbarBrand tag={Link} to="/">
            <img src={Logo} alt="Cool Lake Specialst CC" style={{ width: "auto", height: "auto" }} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/supplies">Supplies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>


        <Switch>
          <Route path="/" exact component={(props) => <HomePage {...props} />} />
          <Route path="/about" component={(props) => <AboutPage {...props} />} />
          <Route path="/services" component={(props) => <ServicesHomePage {...props} />} />
          <Route path="/supplies" component={(props) => <SuppliesHomePage {...props} />} />
          <Route path="/contact" component={(props) => <ContactPage {...props} />} />
        </Switch>

        <Navbar dark className="p-0 py-4 m-0 bg-dark-plus">
          <p className="ml-auto">Copyright &#169; Connor Davis Tech</p>
        </Navbar>
      </Container>
    </Router>
  );
}

export default App;
