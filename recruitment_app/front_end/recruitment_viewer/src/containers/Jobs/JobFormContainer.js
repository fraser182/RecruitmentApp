import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import JobForm from '../../components/jobs/JobForm.js';

class JobsFormContainer extends Component {
  constructor(props){
      super(props);
      this.handleJobPost = this.handleJobPost.bind(this);
    }


  handleJobPost(job){
    const request = new Request();
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
