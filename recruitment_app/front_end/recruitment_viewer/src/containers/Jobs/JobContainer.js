import React, {Component} from 'react';
import JobList from '../../components/jobs/JobList.js';
import '../../css/Jobs/JobContainer.css';

import Request from '../../helpers/request.js';

class JobContainer extends Component {


componentDidMount(){
    let request = new Request()
    request.get('/jobs').then((data) => {
      console.log(data);
    })
  } // NEW

  render(){
    return(
      <div className="job-container">
      <h3>Job Container</h3>
      <JobList />
      </div>

    )
  }

}

export default JobContainer;
