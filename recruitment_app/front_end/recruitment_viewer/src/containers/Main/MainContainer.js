import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JobsContainer from '../Jobs/JobsContainer.js';
import JobFormContainer from '../Jobs/JobFormContainer.js';
// import '../../css/MainContainer.css';



class App extends Component {
  render() {
    return (
      <div className ="main-app">
      <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/jobs/new" component={JobFormContainer}/>
              <Route exact path="/" component={JobsContainer} />
            </Switch>
            </React.Fragment>
          </Router>
      </div>
    );
  }
}

export default App;
