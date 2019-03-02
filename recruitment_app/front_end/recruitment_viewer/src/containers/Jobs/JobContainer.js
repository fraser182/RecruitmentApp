import React, {Component} from 'react';
import JobList from '../../components/jobs/JobList.js';
import '../../css/Jobs/JobContainer.css';

class JobContainer extends Component {

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
