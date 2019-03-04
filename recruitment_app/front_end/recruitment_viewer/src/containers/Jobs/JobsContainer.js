import React, {Component} from 'react';
import JobList from '../../components/jobs/JobList.js';
import '../../css/Jobs/JobsContainer.css';
import Request from '../../helpers/request.js';

class JobsContainer extends Component {
  constructor(props){
      super(props);
      this.state = {jobs: []}
    }

componentDidMount(){
    let request = new Request()
    request.get('/jobs').then((data) => {
      console.log('data coming in from back-end',data._embedded.jobs);
       this.setState({jobs: data._embedded.jobs})
    })
  } 

  handleJobPost(job){
    const request = new Request();
    request.post('/jobs', job).then(() => {
      window.location = '/';
    })
  }

  render(){
    return(

      <div className="job-container">
      <JobList jobs={this.state.jobs} />
      </div>

    )
  }

}

export default JobsContainer;
