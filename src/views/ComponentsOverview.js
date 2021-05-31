import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  Alert
} from "shards-react";

// import PageTitle from "../components/common/PageTitle";
// import Colors from "../components/components-overview/Colors";
// import Checkboxes from "../components/components-overview/Checkboxes";
// import RadioButtons from "../components/components-overview/RadioButtons";
// import ToggleButtons from "../components/components-overview/ToggleButtons";
// import SmallButtons from "../components/components-overview/SmallButtons";
// import SmallOutlineButtons from "../components/components-overview/SmallOutlineButtons";
// import NormalButtons from "../components/components-overview/NormalButtons";
// import NormalOutlineButtons from "../components/components-overview/NormalOutlineButtons";
// import Forms from "../components/components-overview/Forms";
// import FormValidation from "../components/components-overview/FormValidation";
import CompleteFormExample from "../components/components-overview/CompleteFormExample";
// import Sliders from "../components/components-overview/Sliders";
// import ProgressBars from "../components/components-overview/ProgressBars";
// import ButtonGroups from "../components/components-overview/ButtonGroups";
// import InputGroups from "../components/components-overview/InputGroups";
// import SeamlessInputGroups from "../components/components-overview/SeamlessInputGroups";
// import CustomFileUpload from "../components/components-overview/CustomFileUpload";
// import DropdownInputGroups from "../components/components-overview/DropdownInputGroups";
// import CustomSelect from "../components/components-overview/CustomSelect";

const ComponentsOverview = () => (
  <div>
    <Container fluid className="px-0">
      <Alert className="mb-0">
        <i className="fa fa-info mx-2"></i> Submt the form to request a dormitory We will try our best to assign a dorm for you :)
      </Alert>
    </Container>
    

          {/* Complete Form Example */}
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Form Example</h6>
            </CardHeader>
            <CompleteFormExample />
          </Card>
        
  </div>
);

export default ComponentsOverview;
