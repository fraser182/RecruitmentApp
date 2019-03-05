import React from 'react';
import '../../css/HeaderContainer.css';
import { Container } from 'reactstrap';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
import About from '../../components/about.js'


const HeaderContainer = (props) => {
  return (
      <div className="header-container">
        <div className="header-left-techjobs">
        <Container fluid>
          <h1 className="display-3">Tech Jobs</h1>
          <p className="lead">This is the new way to recruit tech.</p>
        </Container>
        </div>
          <div className="header-right">
            <div className="text-right">

              <ul>
                <li className="navLink">
                  <Link to='/jobs/new'>Post A Job</Link>
                </li>
                <li className="navLink">
                    <Link to="/pricing">Pricing</Link>
                </li>
                <li className="navLink">
                  <Link to="/about">About</Link>

                </li>
                <li className="navLink">
                  <Link to="#">Contact</Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
  )
}

export default HeaderContainer;
