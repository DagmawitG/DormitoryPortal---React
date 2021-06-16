import React from "react";
import {
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

const CompleteFormExample = () => (
  <Form onSubmit={handleSubmit}>
  <ListGroup flush>
    <ListGroupItem className="p-3">
    <Row form>
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
);

export default CompleteFormExample;
