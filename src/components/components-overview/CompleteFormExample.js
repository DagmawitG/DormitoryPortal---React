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
  <ListGroup flush>
    <ListGroupItem className="p-3">
    <Row form>
              <Col md="5" className="form-group">
                <label htmlFor="feInputCity">First Name</label>
                <FormInput id="feInputCity" />
              </Col>
              <Col md="5" className="form-group">
                <label htmlFor="feInputZip">Last Name</label>
                <FormInput id="feInputZip" />
              </Col>
              <Col md="2" className="form-group">
                <label htmlFor="feInputState">Gender</label>
                <FormSelect id="feInputState">
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
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Institution</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="insitution"
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
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Department</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="Department"
                />
              </Col>
            </Row>
            
            <Row form>
              <Col md="3" className="form-group">
                <label htmlFor="feInputState">State</label>
                <FormSelect id="feInputState">
                  <option>Choose...</option>
                  <option>...</option>
                </FormSelect>
              </Col>
              <Col md="3" className="form-group">
                <label htmlFor="feInputCity">City</label>
                <FormInput id="feInputCity" />
              </Col>
              <Col md="3" className="form-group">
                <label htmlFor="feInputZip">Subcity</label>
                <FormInput id="feInputZip" />
              </Col>
              <Col md="3" className="form-group">
                <label htmlFor="feInputZip">Woreda</label>
                <FormInput id="feInputZip" />
              </Col>
              </Row>

              <Row form>
                {/* Description */}
                <Col md="8" className="form-group">
                  <label htmlFor="feDescription">Description</label>
                  <FormTextarea id="feDescription" rows="5" />
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
);

export default CompleteFormExample;
