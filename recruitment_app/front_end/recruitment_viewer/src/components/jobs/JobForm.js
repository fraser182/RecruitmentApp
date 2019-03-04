import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const JobsForm = (props) => {

  function handleSubmit(event){
    event.preventDefault();
    const job = {
      "companyName": event.target.companyName.value,
      "email": event.target.contactEmail.value,
      "contactName": event.target.contactName.value,
      "phoneNumber": event.target.contactPhoneNumber.value,
      "title": event.target.title.value,
      "salary": event.target.salary.value,
      "location": event.target.location.value,
      "applicationUrl": event.target.applicationUrl.value,
      "companyCulture": event.target.companyCulture.value,
      "techStack": event.target.techStack.value,
      "yourTeam": event.target.yourTeam.value,
      "responsibilities": event.target.responsibilities.value,
      "requirements": event.target.requirements.value,
      "role": event.target.role.value,
      "skill": event.target.skillLevel.value,
      "type": event.target.jobType.value,
    }

    props.handleJobPost(job)
    
  }


    return (
<div className="jobs-form-container">
      <Form>

      <FormGroup>
        <Label for="exampleText">Company Name</Label>
        <Input type="textarea" name="companyName" id="exampleText" />
      </FormGroup>

          <FormGroup>
          <Label for="exampleEmail">Contact Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>

          <FormGroup>
           <Label for="exampleText">Contact Name</Label>
           <Input type="textarea" name="contactName" id="exampleText" />
          </FormGroup>

          <FormGroup>
          <Label for="exampleText">Contact Phone Number</Label>
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

          <Button type="submit">Submit</Button>
      </Form>


</div>
    );
}

export default JobsForm;
