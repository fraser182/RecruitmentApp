import React, {Component} from 'react';
import '../../css/FilterContainer.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap';
class FilterContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collapse: false,
      role: null,
      skill: null,
      type: null
    };

    this.handleSelection = this.handleSelection.bind(this);
    this.filterJobs = this.filterJobs.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  handleSelection(event){
    this.setState({ [event.target.name]: event.target.value }, () => {
      this.filterJobs()
    });
  }

  filterJobs(){
    const filteredJobs = this.props.jobsData.filter(job => {
      return job.role === this.state.role
    })

    this.props.handleFilter(filteredJobs);
  }

  // const roleFilter =

  render(){
    console.log('allJobs', this.props.jobsData);
    return(
      <div className="filter-container">
      <Button outline color="secondary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Search Type</Button>
      <Collapse isOpen={this.state.collapse}>
      <Card>
      <CardBody>
      <div className="d-flex mb-3 all-filters">
      <div className="p-2 col filter-role">
      <legend>Role</legend>
      <FormGroup tag="fieldset">

      <FormGroup check>
      <Label check>
      <Input type="radio" name="role"  value="Software Developer" onClick={this.handleSelection}/>{' '}
      Software Developer
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="role" value="Tester" onClick={this.handleSelection}/>{' '}
      Tester
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="role" value="Product Owner" onClick={this.handleSelection}/>{' '}
      Product Owner
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="role" value="Back-End Developer" onClick={this.handleSelection}/>{' '}
      Back-End Developer
      </Label>
      </FormGroup>
      </FormGroup>
      </div>
      <div className="p-2 col filter-skill">
      <legend>Skill</legend>
      <FormGroup tag="fieldset">

      <FormGroup check>
      <Label check>
      <Input type="radio" name="skill" value="Junior" onClick={this.handleSelection}/>{' '}
      Junior
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="skill" value="Mid-Level" onClick={this.handleSelection}/>{' '}
      Mid-Level
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="skill" value="Senior" onClick={this.handleSelection}/>{' '}
      Senior
      </Label>
      </FormGroup>
      </FormGroup>
      </div>
      <div className="p-2 col filter-jobtype">
      <legend>Type</legend>
      <FormGroup tag="fieldset" >

      <FormGroup check>
      <Label check>
      <Input type="radio" name="type" value="Full Time" onClick={this.handleSelection}/>{' '}
      Full Time
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="type" value="Part Time" onClick={this.handleSelection}/>{' '}
      Part Time
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="type" value="Internship" onClick={this.handleSelection}/>{' '}
      Internship
      </Label>
      </FormGroup>

      <FormGroup check>
      <Label check>
      <Input type="radio" name="type" value="Temporary" onClick={this.handleSelection}/>{' '}
      Temporary
      </Label>
      </FormGroup>
      </FormGroup>
      </div>

      </div>
      </CardBody>
      </Card>
      </Collapse>
      </div>


    )
  }

}

export default FilterContainer;
