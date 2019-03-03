import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderContainer from './containers/Header/HeaderContainer.js';
import FilterContainer from './containers/Filter/FilterContainer.js';
import JobsContainer from './containers/Jobs/JobsContainer.js';
import FooterContainer from './containers/Footer/FooterContainer.js';
import './css/App.css';



class App extends Component {
  render() {
    return (
      <div className ="main-app">
      <Router>
          <React.Fragment>
        
            <HeaderContainer />
            <FilterContainer />
            <Switch>
            <Route exact path="/" component={JobsContainer} />
          </Switch>
            <FooterContainer />
            </React.Fragment>
          </Router>
      </div>
    );
  }
}

export default App;
