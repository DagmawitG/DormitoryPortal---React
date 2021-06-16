import React from "react";
import { Row, Col, Button } from "shards-react";

const NormalButtons = () => (
  <Row>
    <Col sm ={{ size : 4 , order : 1 , offset: 1}}>
      <Button theme="primary" className="mb-4 mr-1">
        Accepted
      </Button>
    </Col>
    <Col sm ={{ size : 4 , order : 1 , offset: 1}}>
      <Button theme="secondary" className="mb-4 mr-1">
        Declined
      </Button>
    </Col>
  </Row>
);

export default NormalButtons;
