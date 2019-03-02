import React, { Component } from 'react';
import HeaderContainer from './containers/Header/HeaderContainer.js';
import FilterContainer from './containers/Filter/FilterContainer.js';
import JobContainer from './containers/Jobs/JobContainer.js';
import FooterContainer from './containers/Footer/FooterContainer.js';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div class ="main-app">
      <h2>Main App Container</h2>
      <HeaderContainer />
      <FilterContainer />
      <JobContainer />
      <FooterContainer />
      </div>
    );
  }
}

export default App;
