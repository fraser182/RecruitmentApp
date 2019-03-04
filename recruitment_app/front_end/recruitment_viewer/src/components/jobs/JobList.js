import React from 'react';
import '../../css/Jobs/JobList.css';
import Job from './Job.js';


const JobList = (props) => {
  const jobs = props.jobs.map((job, index) => {
    return (

    <Job job={job} key={index} />

    )
  })

    console.log('joblist', props);

  return (
  		<div className="jobs-container">
  	    {jobs}
  	  </div>

  	)


}

export default JobList;
