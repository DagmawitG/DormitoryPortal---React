import React from "react";
import { Container, Row, Col } from "shards-react";

import Login from "../components/user-profile-lite/Login";

const Login = () => (
  <Container fluid className="main-content-container px-4">
    <Row >
      <Col sm ={{ size : 6 , order : 3 , offset: 3}}>
        <Login/>
      </Col>
    </Row>
  </Container>
);

export default Login;