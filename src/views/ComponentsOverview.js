import React, { useState, useEffect } from 'react';
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

function ComponentsOverview (){
  const [ formValues, setFormValues ] = useState({});

  const handleChange = (e) => {
		const { name, value } = e.target;

		setFormValues({ ...formValues, [name]: value });
	};

  const handleSubmit = (e) => {
		e.preventDefault();
		setFormValues({});
		//let instructorId = localStorage.getItem('user');
		
    axios.post('requests', {
        requestedPerson_id: 'user_id',
				students_id: formValues.students_id,
				firstname: formValues.firstname,
				lastname: formValues.lastname,
        gender: formValues.gender,
        email: formValues.email,
        institution: formValues.institution,
        department: formValues.department,
        year: formValues.year,
        description: formValues.description,
        state: formValues.state,
        city: formValues.city,
        woreda: formValues.woreda
			})
			.then((res) => {
				console.log(res);
			});
	};
  
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
            <Form onSubmit={handleSubmit}>
  <ListGroup flush>
    <ListGroupItem className="p-3">
    <Row>
              <Col md="5" className="form-group">
                <label htmlFor="feInputCity">First Name</label>
                <FormInput id="feInputCity" name="firstname" 
                onChange={handleChange} value={formValues.title}/>
              </Col>
              <Col md="5" className="form-group">
                <label htmlFor="feInputZip">Last Name</label>
                <FormInput id="feInputZip" name="lastname"
                onChange={handleChange} value={formValues.lastname}/>
              </Col>
              <Col md="2" className="form-group">
                <label htmlFor="feInputState">Gender</label>
                <FormSelect id="feInputState" name="gender"
                onChange={handleChange} value={formValues.gender}>
                  <option>male</option>
                  <option>female</option>
                </FormSelect>
              </Col>
              
            </Row>
      <Row>
        <Col>
          <Form>
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Email</label>
                <FormInput
                  id="feEmailAddress"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange} 
                  value={formValues.email}
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Institution</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="insitution"
                  name="institution"
                  onChange={handleChange} 
                  value={formValues.institution}
                />
              </Col>
            </Row>
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">ID</label>
                <FormInput
                  id="feEmailAddress"
                  type="email"
                  placeholder="Id"
                  name="students_id"
                  onChange={handleChange} 
                  value={formValues.students_id}
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Department</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="Department"
                  name="department"
                  onChange={handleChange} 
                  value={formValues.department} 
                />
              </Col>
            </Row>
            
            <Row form>
              <Col md="3" className="form-group">
                <label htmlFor="feInputState">State</label>
                <FormSelect id="feInputState" 
                  name="state"
                  onChange={handleChange} 
                  value={formValues.state}>
                  <option>Choose...</option>
                  <option>...</option>
                </FormSelect>
              </Col>
              <Col md="3" className="form-group">
                <label htmlFor="feInputCity">City</label>
                <FormInput id="feInputCity" name="city"
                onChange={handleChange} value={formValues.city}/>
              </Col>
              <Col md="3" className="form-group">
                <label htmlFor="feInputZip">Subcity</label>
                <FormInput id="feInputZip" name="subcity"
                onChange={handleChange} value={formValues.subcity}/>
              </Col>
              <Col md="3" className="form-group">
                <label htmlFor="feInputZip">Woreda</label>
                <FormInput id="feInputZip" name="woreda"
                onChange={handleChange} value={formValues.woreda}/>
              </Col>
              </Row>

              <Row form>
                {/* Description */}
                <Col md="8" className="form-group">
                  <label htmlFor="feDescription">Description</label>
                  <FormTextarea id="feDescription" rows="5" name="description"
                onChange={handleChange} value={formValues.description}/>
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
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
  </Form>
          </Card>
        
  </div>
  )
}

export default ComponentsOverview;
