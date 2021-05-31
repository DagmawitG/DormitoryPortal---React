import React from "react";
import PropTypes from "prop-types";
import {
  Container,
   Row,
    Col, 
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress,
  CardBody,
  Form,
  FormGroup,
  FormInput
} from "shards-react";

const Login = () => (
   <Container fluid className="main-content-container px-4">
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
     Login page
    </CardHeader>
    <CardBody>

   
    <Form>
      <FormGroup>
        <label htmlFor="#username">Username</label>
        <FormInput id="#username" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#password">Password</label>
        <FormInput type="password" id="#password" placeholder="Password" />
      </FormGroup>
    </Form>

    </CardBody>
    {/* <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
            {userDetails.performanceReportTitle}
          </strong>
          <Progress
            className="progress-sm"
            value={userDetails.performanceReportValue}
          >
            <span className="progress-value">
              {userDetails.performanceReportValue}%
            </span>
          </Progress>
        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          {userDetails.metaTitle}
        </strong>
        <span>{userDetails.metaValue}</span>
      </ListGroupItem>
    </ListGroup> */}
  </Card>
  </Container>
);



export default Login;
