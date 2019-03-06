import React from 'react';
import '../../css/HeaderContainer.css';
// import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
// import About from '../../components/about.js';


const HeaderContainer = (props) => {
  return (
      <div className="header-container">
        <div className="header-left-techjobs">

          <h1 className="logo">consoleLog</h1>
          <p>The new way to recruit tech.</p>

        </div>
          <div className="header-right">
              <ul>

                <li className="navLink">
                  <Link to='/'>Home</Link>
                </li>
                <li className="navLink">
                    <Link to="/jobs/new">Post a Job</Link>
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

  )
}

export default HeaderContainer;
