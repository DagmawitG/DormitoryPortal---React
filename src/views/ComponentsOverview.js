import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardHeader,
  Alert
} from "shards-react";
import axios from '../axios';

import CompleteFormExample from "../components/components-overview/CompleteFormExample";

function ComponentsOverview (){
  const [ formValues, setFormValues ] = useState({});

  const handleChange = (e) => {
		const { name, value } = e.target;

		setFormValues({ ...formValues, [name]: value });
	};

  const handleSubmit = (e) => {
		e.preventDefault();
		setFormValues({});
		let instructorId = localStorage.getItem('user');
		axios
			.post('RequestAPI', {
				stu: formValues.title,
				description: formValues.description,
				instructorId: instructorId
			})
			// .then((res) => {
			// 	history.push('/instructorhome');
			// });
	};
  
  return(
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
  )
}

export default ComponentsOverview;
