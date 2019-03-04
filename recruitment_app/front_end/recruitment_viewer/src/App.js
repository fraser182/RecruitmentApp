import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderContainer from './containers/Header/HeaderContainer.js';
import FilterContainer from './containers/Filter/FilterContainer.js';
import JobsContainer from './containers/Jobs/JobsContainer.js';
import FooterContainer from './containers/Footer/FooterContainer.js';
import JobsForm from './components/jobs/JobForm.js';
import './css/App.css';



class App extends Component {
  render() {
    return (
      <div className ="main-app">
      <Router>
          <React.Fragment>

            <HeaderContainer />
            <FilterContainer />

            <Route exact path="/jobs/new" component={JobsForm}/>
            <Route exact path="/" component={JobsContainer} />
            <FooterContainer />
            </React.Fragment>
          </Router>
      </div>
    );
  }
}

export default App;
