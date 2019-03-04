import React from 'react';
import '../../css/Jobs/Job.css';
import { UncontrolledCollapse} from 'reactstrap';

const Job = (props) => {
  if (!props.job){
    return null
  }


// console.log('test before', props.job);
// console.log('Unique Identifier', props.job.dateCreated);
const expandDivId = `L` + props.job.dateCreated;
const hashExpandedDivId = `#` + expandDivId;

  return (

    <div className="job" id={expandDivId}>

    <p> {props.job.title}</p>
    <p> {props.job.jobType}</p>
    <p>{props.job.salary}</p>
    <UncontrolledCollapse toggler={hashExpandedDivId}>


    <p>{props.job.skillLevel}</p>
    <p>{props.job.techStack}</p>
    <p> {props.job.companyName} </p>
    <p> {props.job.location}</p>
    <p>{props.job.applicationUrl}</p>
    <p>{props.job.yourTeam}</p>
    <p>{props.job.responsibilities}</p>
    <p>{props.job.companyCulture}</p>
    <p> {props.job.yourTeam} </p>

    </UncontrolledCollapse>
      </div>
  )
}

export default Job;
