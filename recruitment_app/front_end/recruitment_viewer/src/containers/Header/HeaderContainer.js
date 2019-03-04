import React, {Component} from 'react';
import '../../css/HeaderContainer.css';
import { Container } from 'reactstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import NavBar from '../../NavBar.js'


class HeaderContainer extends Component {
  constructor(props){
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      selected: null
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleSelect(){
    this.setState({ selected: true })
  }

  // http://localhost:3000/pirates/new

  render(){
    return(
  <div className="header-container">
      <div className="header-left-techjobs">
        <Container fluid>
          <h1 className="display-3">Tech Jobs</h1>
          <p className="lead">This is the new way to recruit tech.</p>
        </Container>
      </div>
      <div className="header-right">
          <div className="text-right">
          <Router>
          <React.Fragment>
          <NavBar onSelect = {this.handleSelect}/>
          </React.Fragment>
          </Router>
          </div>
      </div>
  </div>
      // <div className="main-header-container">
      //   <h2>Header Container</h2>
      //     <div className="header-left">
      //         <h3>header left container</h3>
      //         <div className="header-left-top">
      //         <h4>LOGO</h4>
      //         </div>
      //         <div className="header-left-bottom">
      //         <h4>the best website in the world</h4>
      //         </div>
      //     </div>

      // </div>

    )
  }

}

export default HeaderContainer;
