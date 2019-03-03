
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
  <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Search Type</Button>
  <Collapse isOpen={this.state.collapse}>
    <Card>
      <CardBody>
      <div className="d-flex mb-3 example-parent">
      <div className="p-2 col">
      <legend>Role</legend>
      <FormGroup tag="fieldset">

          <FormGroup check>
            <Label check>
              <Input type="radio" name="softwareDeveloper" />{' '}
              Software Developer
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="radio" name="tester" />{' '}
              Tester
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="radio" name="productOwner" />{' '}
              Product Owner
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="radio" name="backEndDeveloper" />{' '}
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
                <Input type="radio" name="junior" />{' '}
                Junior
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input type="radio" name="midLevel" />{' '}
                Mid-Level
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input type="radio" name="senior" />{' '}
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
                  <Input type="radio" name="fullTime" />{' '}
                  Full Time
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type="radio" name="partTime" />{' '}
                  Part Time
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type="radio" name="internship" />{' '}
                  Internship
                </Label>
              </FormGroup>

              <FormGroup check>
                <Label check>
                  <Input type="radio" name="t2emporary" />{' '}
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
