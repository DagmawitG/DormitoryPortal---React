import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Sent_request from "../components/user-profile-lite/sent_request";

import axios from '../axios';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

function Sentrequest(){
  let { id } = useParams();
  	const [ requestInfo, setrequestInfo ] = useState([]);
    // const [ requestInfot, setrequestInfot ] = useState({});
  
    useEffect(
      ()=>{
        
        async function fetchData() {
          const request = await axios.get(`requests`);
          console.log('REQUESt');
          console.log(request.data);
          setrequestInfo(request.data);
          // setrequestInfot(request.data[1]);

          return request;
      }
      fetchData();
    },
    [id ]
    );
    {}

    
    {console.log(requestInfo)}
    let a = 0;

    return(
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Sent Requests" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row >
      <Col sm ={{ size : 8 , order : 2 , offset: 2}}>
        {requestInfo.map((i) =>(
          <Sent_request requestinfo={[i]}/>
        )
        )}
        
      </Col>
    </Row>
   
  </Container>
);
    }
export default Sentrequest;
