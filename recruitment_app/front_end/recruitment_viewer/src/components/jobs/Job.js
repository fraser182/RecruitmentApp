import React from 'react';
import '../../css/Jobs/Job.css';

const Job = (props) => {
  if (!props.job){
    return null
  }
  //React.Fragment is acting as a container that you cannot style.
  return (

    <React.Fragment>
    <div className="job">
    <p> {props.job.title}</p>
    <p> {props.job.jobType}</p>
    <p>{props.job.salary}</p>
    <p>{props.job.skillLevel}</p>
    <p>{props.job.techStack}</p>
    <p> {props.job.companyName} </p>
    <p> {props.job.location}</p>
    <p>{props.job.applicationUrl}</p>
    <p>{props.job.yourTeam}</p>
    <p>{props.job.responsibilities}</p>
    <p>{props.job.companyCulture}</p>
    <p> {props.job.yourTeam} </p>
    </div>
    </React.Fragment>
  )
}

export default Job;
