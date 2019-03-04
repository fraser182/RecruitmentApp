import React, { Component } from 'react';

import HeaderContainer from './containers/Header/HeaderContainer.js';
import FilterContainer from './containers/Filter/FilterContainer.js';
import MainContainer from './containers/Main/MainContainer.js';
import FooterContainer from './containers/Footer/FooterContainer.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>

      <HeaderContainer />
      <FilterContainer />
      <MainContainer />
      <FooterContainer />

      </React.Fragment>

    );
  }
}

export default App;
