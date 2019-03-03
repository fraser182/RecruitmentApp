import React from 'react';
import '../../css/Jobs/Job.css';

const Job = (props) => {
  if (!props.job){
    return null
  }

  // const url = "/jobs/" + props.job.id;
  return (
    <React.Fragment>
    <a className="job">
    {props.job.companyName}
    </a>
    </React.Fragment>
  )
}

export default Job;
