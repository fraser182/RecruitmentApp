import React, {Component} from 'react';
import '../../css/Jobs/JobList.css';
import Job from './Job.js';

class JobList extends Component{

  render(){
    return(
      <div className="jobs-list-container">
      <h3>Jobs List</h3>
      <Job />
      </div>
    )
  }

}

export default JobList;
