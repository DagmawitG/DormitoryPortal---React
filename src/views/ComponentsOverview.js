import React, { Component, useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardHeader,
  Alert,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormCheckbox,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import axios from '../axios';

//import CompleteFormExample from "../components/components-overview/CompleteFormExample";

class ComponentsOverview extends Component{
    constructor(props) {
        super(props)

        this.state = {
        // requestedPerson_id: '1',
        students_id: '',
		    firstname: '',
		    lastname: '',
        gender: 'male',
        email: '',
        institution: '',
        department: '',
        year: '2',
        description: '',
        state: '',
        city: '',
        woreda: '10',
        sub_city: ''
        }
    }

    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
		// const { name, value } = e.target;

		// setFormValues({ ...formValues, [name]: value });
	}

  handleSubmit = (e) => {
		e.preventDefault();
        console.log(this.state);
		// setFormValues({});
		//let instructorId = localStorage.getItem('user');
		
    axios.post('requests', this.state)
        .then(response => {
          console.log(response)
        this.setState({
          data: response.data
        })})
        .catch(error => {
          console.log(error)
        })
        
	  }

    render(){
  const { students_id, firstname, lastname, gender, email, institution, department,
year, description, state, city, woreda, sub_city } = this.state

  
  
  return(
  <div>
    <Container fluid className="px-0">
      <Alert className="mb-0">
        <i className="fa fa-info mx-2"></i> Submt the form to request a dormitory We will try our best to assign a dorm for you :)
      </Alert>
    </Container>
    

          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Form Example</h6>
            </CardHeader>
            <Form onSubmit={this.handleSubmit}>
  <ListGroup flush>
    <ListGroupItem className="p-3">
    <Row>
              <Col md="5" className="form-group">
                <label htmlFor="feInputCity">First Name</label>
                <FormInput id="feInputCity" name="firstname" 
                onChange={this.handleChange} value={firstname}/>
              </Col>
              <Col md="5" className="form-group">
                <label htmlFor="feInputZip">Last Name</label>
                <FormInput id="feInputZip" name="lastname"
                onChange={this.handleChange} value={lastname}/>
              </Col>
              <Col md="2" className="form-group">
                <label htmlFor="feInputState">Gender</label>
                <FormSelect id="feInputState" name="gender"
                onChange={this.handleChange} value={gender}>
                  <option>male</option>
                  <option>female</option>
                </FormSelect>
              </Col>
              
            </Row>
      <Row>
        <Col>
          
            <Row>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Email</label>
                <FormInput
                  id="feEmailAddress"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChange} 
                  value={email}
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Institution</label>
                <FormInput
                  id="fePassword"
                  placeholder="insitution"
                  name="institution"
                  onChange={this.handleChange} 
                  value={institution}
                />
              </Col>
            </Row>
            <Row>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">ID</label>
                <FormInput
                  id="feEmailAddress"
                  
                  placeholder="Id"
                  name="students_id"
                  onChange={this.handleChange} 
                  value={students_id}
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Department</label>
                <FormInput
                  id="fePassword"
                  
                  placeholder="Department"
                  name="department"
                  onChange={this.handleChange} 
                  value={department} 
                />
              </Col>
            </Row>
            
            <Row>
              <Col md="3" className="form-group">
                <label htmlFor="feInputState">State</label>
                <FormSelect id="feInputState" 
                  name="state"
                  onChange={this.handleChange} 
                  value={state}>
                  <option>Choose...</option>
                  <option>A.A</option>
                </FormSelect>
              </Col>
              <Col md="3" className="form-group">
                <label htmlFor="feInputCity">City</label>
                <FormInput id="feInputCity" name="city"
                onChange={this.handleChange} value={city}/>
              </Col>
              <Col md="3" className="form-group">
                <label htmlFor="feInputZip">Subcity</label>
                <FormInput id="feInputZip" name="subcity"
                onChange={this.handleChange} value={sub_city}/>
              </Col>
              <Col md="3" className="form-group">
                <label htmlFor="feInputZip">Woreda</label>
                <FormInput id="feInputZip" name="woreda"
                onChange={this.handleChange} value={woreda}/>
              </Col>
              </Row>

              <Row>
                {/* Description */}
                <Col md="8" className="form-group">
                  <label htmlFor="feDescription">Description</label>
                  <FormTextarea id="feDescription" rows="5" name="description"
                onChange={this.handleChange} value={description}/>
                </Col>
              </Row>

            

              <Row>
              <Col md="12" className="form-group">
                <FormCheckbox>
                  {/* eslint-disable-next-line */}I agree with your{" "}
                  <a href="#">Privacy Policy</a>.
                </FormCheckbox>
              </Col>
            </Row>
            <Button type="submit">Submit form</Button>
          
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
  </Form>
          </Card>
        
  </div>
  )
}}

export default ComponentsOverview;
