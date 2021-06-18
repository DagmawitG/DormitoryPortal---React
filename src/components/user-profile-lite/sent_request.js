import React, { useState, useEffect } from "react";


import {
  Card,
  CardHeader,
  Container,
  ListGroup,
  ListGroupItem
} from "shards-react";
import NormalButtons from "../components-overview/NormalButtons";
// import Sentrequest from "../../views/Sent_request";


export default function Sent_request({requestinfo}){

    
    return(
      
      
    <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      {/* <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          // src={requestinfo.name}
          alt={requestinfo.name}
          width="110"
        />
      </div> */}
      <h4 className="mb-0">{requestinfo[0] ? requestinfo[0].firstname : '-'}</h4>
      <span className="text-muted d-block mb-2">{requestinfo[0] ? requestinfo[0].institution : '-'}</span>
      <span className="text-muted d-block mb-2">{requestinfo[0] ? requestinfo[0].department : '-'}</span>
      <span className="text-muted d-block mb-2">{requestinfo[0] ? requestinfo[0].student_id : '-'}</span>
    </CardHeader>
    <ListGroup>
        <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2">
                    Description
                </strong>
            <span>{requestinfo[0] ? requestinfo[0].description : '-'}</span>
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