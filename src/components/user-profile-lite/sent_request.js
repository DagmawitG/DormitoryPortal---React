import React, { useState, useEffect } from "react";
import axios from '../../axios';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

import {
  Card,
  CardHeader,
  Container,
  ListGroup,
  ListGroupItem
} from "shards-react";
import NormalButtons from "../components-overview/NormalButtons";
import Sentrequest from "../../views/Sent_request";


export default function Sent_request(props){

    let { id } = useParams();
  	const [ requestInfo, setrequestInfo ] = useState({});

    useEffect(
      ()=>{
        async function fetchData() {
          const request = await axios.get(`requests`);
          console.log('REQUESt');
          console.log(request.data[0]);
          setrequestInfo(request.data[0]);

          return request;
      }
      fetchData();
    },
    [id ]
    );

    {console.log(requestInfo)}

    return(

    <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          // src={requestInfo.name}
          alt={requestInfo.name}
          width="110"
        />
      </div>
      <h4 className="mb-0">{requestInfo.name}</h4>
      <span className="text-muted d-block mb-2">{requestInfo.institution}</span>
      <span className="text-muted d-block mb-2">{requestInfo.department}</span>
      <span className="text-muted d-block mb-2">{requestInfo.student_id}</span>
    </CardHeader>
    <ListGroup flush>
        <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2">
                    Description
                </strong>
            <span>{requestInfo.description}</span>
        </ListGroupItem>
        <ListGroupItem className="px-4">
            <span className="progress-value">
                <NormalButtons />
            </span>
        </ListGroupItem>
    </ListGroup>
  </Card>  
  
)
    }

// Sent_request.prototype = {

//     sentRequest : PropTypes.object
// };

// Sent_request.defaultProps = {
//     sentRequest: {
//         name: "Dagi ",
//         avatar: require("./../../images/avatars/0.jpg"),
//         Department: "Software 3rd year",
//         Institution: "AAIT",
//         ID_Number : "atr/005256/11",
//         metaTitle: "Description",
//         metaValue:
//            "Since I live in a far neighboorhood i would like to have a dorm."
//     }
// }

// export default Sent_request;