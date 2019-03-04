import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import JobsContainer from '../Jobs/JobsContainer.js';
import JobList from '../../components/jobs/JobList.js';
import JobFormContainer from '../Jobs/JobFormContainer.js';
// import '../../css/MainContainer.css';
import Request from '../../helpers/request.js';


class MainContainer extends Component {
  constructor(props){
      super(props);
      this.state = {jobs: []}
    }

componentDidMount(){
    let request = new Request()
    request.get('/jobs').then((data) => {
      console.log('data coming in from back-end',data._embedded.jobs);
       this.setState({jobs: data._embedded.jobs})
    })
  }


  render() {
    return (
      <div className ="main-app">
      <Router>
          <React.Fragment>
            <Switch>

              <Route exact path="/" render={(props) => {return <JobList jobs={this.state.jobs}/> }}/>

              <Route exact path="/jobs/new" render={(props) => { return <JobFormContainer /> }}/>

            </Switch>
            </React.Fragment>
          </Router>
      </div>
    );
  }
}

export default MainContainer;
