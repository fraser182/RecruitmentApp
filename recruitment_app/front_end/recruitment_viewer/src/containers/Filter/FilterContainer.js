import React, {Component} from 'react';
import '../../css/FilterContainer.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap';
class FilterContainer extends Component {

  constructor(props) {
  super(props);
  this.toggle = this.toggle.bind(this);
  this.state = { collapse: false };
};

  toggle() {
  this.setState({ collapse: !this.state.collapse });
}

  render(){
    return(
      <div className="filter-container">
  <Button outline color="secondary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Search Type</Button>
  <Collapse isOpen={this.state.collapse}>
    <Card>
      <CardBody>
      <div className="d-flex mb-3 example-parent">
      <div className="p-2 col">
      <legend>Role</legend>
      <FormGroup tag="fieldset">

          <FormGroup check>
            <Label check>
              <Input type="radio" name="role"  value="sd"/>{' '}
              Software Developer
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="radio" name="role" value="t"/>{' '}
              Tester
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="radio" name="role" value="po"/>{' '}
              Product Owner
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="radio" name="role" value="bed"/>{' '}
              Back-End Developer
            </Label>
          </FormGroup>
        </FormGroup>
      </div>
      <div className="p-2 col">
        <legend>Skill</legend>
        <FormGroup tag="fieldset">

            <FormGroup check>
              <Label check>
                <Input type="radio" name="skillLevel" value=""/>{' '}
                Junior
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input type="radio" name="skillLevel" value=""/>{' '}
                Mid-Level
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input type="radio" name="skillLevel" value=""/>{' '}
                Senior
              </Label>
            </FormGroup>
          </FormGroup>
          </div>
          <div className="p-2 col">
          <legend>Type</legend>
          <FormGroup tag="fieldset">

              <FormGroup check>
                <Label check>
                  <Input type="radio" name="jobType" value=""/>{' '}
                  Full Time
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type="radio" name="jobType" value=""/>{' '}
                  Part Time
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type="radio" name="jobType" value=""/>{' '}
                  Internship
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type="radio" name="jobType" value=""/>{' '}
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
