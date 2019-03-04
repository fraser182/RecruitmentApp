import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class JobsFormContainer extends React.Component {
  render() {
    return (
      <Form>

      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>

          <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>

          <FormGroup>
           <Label for="exampleText">Name</Label>
           <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>

          <FormGroup>
          <Label for="exampleText">Phone Number</Label>
          <Input type="textarea" name="phoneNumber" id="exampleText" />
          </FormGroup>

          <FormGroup>
          <Label for="exampleText">Title</Label>
          <Input type="textarea" name="title" id="exampleText" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">Salary</Label>
            <Input type="select" name="salary" id="exampleSelect">
            <option>18,000</option>
            <option>20,000+</option>
            <option>25,000+</option>
            <option>30,000+</option>
            <option>50,000+</option>
            </Input>
          </FormGroup>

          <FormGroup>
          <Label for="exampleText">Location</Label>
          <Input type="textarea" name="location" id="exampleText" />
          </FormGroup>

          <FormGroup>
          <Label for="exampleUrl">Application URL</Label>
          <Input type="url" name="url" id="applicationUrl" placeholder="url placeholder"/>
          </FormGroup>

          <FormGroup>
          <Label for="exampleText">Company Culture</Label>
          <Input type="textarea" name="companyCulture" id="exampleText" />
          </FormGroup>

          <FormGroup>
          <Label for="exampleText">Tech Stack</Label>
          <Input type="textarea" name="techStack" id="exampleText" />
          </FormGroup>

          <FormGroup>
          <Label for="exampleText">Your Team</Label>
          <Input type="textarea" name="yourTeam" id="exampleText" />
          </FormGroup>

          <FormGroup>
          <Label for="exampleText">Responsibilities</Label>
          <Input type="textarea" name="responsibilities" id="exampleText" />
          </FormGroup>

          <FormGroup>
          <Label for="exampleText">Requirements</Label>
          <Input type="textarea" name="requirements" id="exampleText" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">Role</Label>
            <Input type="select" name="role" id="exampleSelect">
            <option>Software Developer</option>
            <option>Tester</option>
            <option>Product Owner</option>
            <option>Back-End Developer</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">Skill</Label>
            <Input type="select" name="skill" id="exampleSelect">
            <option>Junior</option>
            <option>Mid-Level</option>
            <option>Senior</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">Type</Label>
            <Input type="select" name="type" id="exampleSelect">
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Internship</option>
            <option>Temporary</option>
            </Input>
          </FormGroup>
      </Form>
    );
  }
}

export default JobsFormContainer;
