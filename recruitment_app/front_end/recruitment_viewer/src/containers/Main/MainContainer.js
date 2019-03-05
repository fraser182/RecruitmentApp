import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderContainer from '../Header/HeaderContainer.js';
import JobList from '../../components/jobs/JobList.js';
import JobFormContainer from '../Jobs/JobFormContainer.js';
import FilterContainer from '../Filter/FilterContainer.js';
import FooterContainer from '../Footer/FooterContainer.js';
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
          <HeaderContainer />
          <FilterContainer />
            <Switch>

              <Route exact path="/" render={(props) => {return <JobList jobs={this.state.jobs}/> }}/>


              <Route exact path="/jobs/new" render={(props) => { return <JobFormContainer /> }}/>

            </Switch>
            <FooterContainer />

            </React.Fragment>

          </Router>
      </div>
    );
  }
}

export default MainContainer;
