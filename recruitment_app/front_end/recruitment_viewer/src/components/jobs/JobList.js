import React from 'react';
import '../../css/Jobs/JobList.css';
import Job from './Job.js';


const JobList = (props) => {
  const jobs = props.jobs.map((job, index) => {
    return (<li key={index} className="jobs-list-container">
    <Job job={job} />
    </li>
    )
  })

  return (
  		<ul className="component-list">
  	    {jobs}
  	  </ul>

  	)


}

export default JobList;


// const PirateList = (props) => {
// 	const pirates = props.pirates.map((pirate) => {
// 		 	return (<li key={pirate.id} className="component-item">
// 				<Pirate pirate={pirate} />
// 			</li>
// 		)
// 		})
//
// 	return (
// 		<ul className="component-list">
// 	    {pirates}
// 	  </ul>
//
// 	)
// }
//  export default PirateList;
