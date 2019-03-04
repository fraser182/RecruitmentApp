import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import JobForm from '../../components/jobs/JobForm.js';

class JobsFormContainer extends Component {
  constructor(props){
      super(props);
      this.handleJobPost = this.handleJobPost.bind(this);
    }


  handleJobPost(job){
    console.log('did we get this job to show', job);
    const request = new Request();
    console.log('if you see this, the request was made');
    request.post('/jobs', job).then(() => {
      window.location = '/';
    })
  }

  render(){
    return(

      <JobForm handleJobPost = {this.handleJobPost}/>

    )
  }

}

export default JobsFormContainer;
