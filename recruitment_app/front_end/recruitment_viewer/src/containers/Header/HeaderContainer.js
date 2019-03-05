import React from 'react';
import '../../css/HeaderContainer.css';
import { Container } from 'reactstrap';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
import About from '../../components/about.js'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


  class HeaderContainer extends React.Component {

    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render(){
      return (
        <Container fluid>
        <h1 className="display-3">Tech Jobs</h1>
        <p className="lead">This is the new way to recruit tech.</p>


        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
        <NavItem>
        <NavLink href="/components/">Pricing</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/jobs/new">Post a Job</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/jobs/new">About</NavLink>
        </NavItem>
        </Nav>
        </Collapse>
        </Navbar>
        </Container>

      );
    }
  }

  export default HeaderContainer;
