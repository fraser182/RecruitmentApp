import React, {Component} from 'react';
import JobList from '../../components/jobs/JobList.js';
import '../../css/Jobs/JobContainer.css';

import Request from '../../helpers/request.js';

class JobContainer extends Component {
  constructor(props){
      super(props);
      this.state = {jobs: []}
    }

componentDidMount(){
    let request = new Request()
    request.get('/jobs').then((data) => {
      console.log(data._embedded.jobs);
       this.setState({jobs: data._embedded.jobs})
    })
  } // NEW

  render(){
    return(
      <div className="job-container">
      <JobList jobs={this.state.jobs} />

      </div>

    )
  }

}

export default JobContainer;
