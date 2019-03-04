import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
      <ul>
        <li className="navLink">
          <Link to="/jobs/new">Post A Job</Link>
        </li>
        <li className="navLink">
          <Link to="#">Pricing</Link>
        </li>
        <li className="navLink">
          <Link to="#">About</Link>
        </li>
        <li className="navLink">
          <Link to="#" >Contact</Link>
        </li>
      </ul>
  )
}

export default NavBar;
