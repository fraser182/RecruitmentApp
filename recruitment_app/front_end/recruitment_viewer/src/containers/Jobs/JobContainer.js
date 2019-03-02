import React, {Component} from 'react';
import JobList from '../../components/jobs/JobList.js';
import '../../css/Jobs/JobContainer.css';

class JobContainer extends Component {

  render(){
    return(
      <div class="job-container">
      <JobList />
      </div>

    )
  }

}

export default JobContainer;
