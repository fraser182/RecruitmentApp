import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderContainer from './containers/Header/HeaderContainer.js';
import FilterContainer from './containers/Filter/FilterContainer.js';
import JobContainer from './containers/Jobs/JobContainer.js';
import FooterContainer from './containers/Footer/FooterContainer.js';
import './css/App.css';


class App extends Component {
  render() {
    return (
      <div className ="main-app">
    
          <React.Fragment>
          <h2>Main App Container</h2>
            <HeaderContainer />
            <FilterContainer />
            <JobContainer />
                <FooterContainer />
            </React.Fragment>

      </div>
    );
  }
}

export default App;
