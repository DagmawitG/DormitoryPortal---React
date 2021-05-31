import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Sent_request from "../components/user-profile-lite/sent_request";

const Sentrequest = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Sent Requests" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row >
      <Col sm ={{ size : 6 , order : 3 , offset: 3}}>
        <Sent_request/>
      </Col>
    </Row>
    <Row >
      <Col sm ={{ size : 6 , order : 3 , offset: 3}}>
        <Sent_request/>
      </Col>
    </Row>
  </Container>
);

export default Sentrequest;
