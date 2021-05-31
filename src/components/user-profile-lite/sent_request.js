import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Form,
  Alert
} from "shards-react";
import NormalButtons from "../components-overview/NormalButtons";


const Sent_request = ({ sentRequest}) => (
    <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={sentRequest.avatar}
          alt={sentRequest.name}
          width="110"
        />
      </div>
      <h4 className="mb-0">{sentRequest.name}</h4>
      <span className="text-muted d-block mb-2">{sentRequest.Department}</span>
      <span className="text-muted d-block mb-2">{sentRequest.ID_Number}</span>
    </CardHeader>
    <ListGroup flush>
        <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2">
                    {sentRequest.metaTitle}
                </strong>
            <span>{sentRequest.metaValue}</span>
        </ListGroupItem>
        <ListGroupItem className="px-4">
            <span className="progress-value">
                <NormalButtons />
            </span>
        </ListGroupItem>
    </ListGroup>
  </Card>  
);

Sent_request.prototype = {

    sentRequest : PropTypes.object
};

Sent_request.defaultProps = {
    sentRequest: {
        name: "Dagi ",
        avatar: require("./../../images/avatars/0.jpg"),
        Department: "Software 3rd year",
        ID_Number : "atr/005256/11",
        metaTitle: "Description",
        metaValue:
           "Since I live in a far neighboorhood i would like to have a dorm."
    }
}

export default Sent_request;