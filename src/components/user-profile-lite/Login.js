import React from "react";
import {
  Container,
   Row,
    Col, 
  Card,
  CardHeader,
  Button,
  CardBody,
  Form,
  FormGroup,
  FormInput
} from "shards-react";

const Login = () => (
   <Container fluid className="main-content-container px-4">
     <Row >
      <Col sm ={{ size : 8 , order : 2 , offset: 2}} md = {{ size : 10 , order : 1 , offset:1 }}>
    
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
     Login page
    </CardHeader>
    <CardBody>

   
    <Form>
      <FormGroup>
        <label htmlFor="#username">Id_Number</label>
        <FormInput id="#username" placeholder="idNumber" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#password">Password</label>
        <FormInput type="password" id="#password" placeholder="Password" />
      </FormGroup>
    </Form>
    <Button type="submit">LogIn</Button>

    </CardBody>
  </Card>
  </Col>
  </Row>
  </Container>
);



export default Login;
