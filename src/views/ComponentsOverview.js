import React from "react";
import {
  Container,
  Card,
  CardHeader,
  Alert
} from "shards-react";

import CompleteFormExample from "../components/components-overview/CompleteFormExample";

const ComponentsOverview = () => (
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
            <CompleteFormExample />
          </Card>
        
  </div>
);

export default ComponentsOverview;
