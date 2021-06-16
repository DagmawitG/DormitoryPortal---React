import React, { Component } from "react";
import ReactQuill from "react-quill";
import { Container, Row, Col , Button, Card, CardBody, Form, FormInput  } from "shards-react";

import PageTitle from "../components/common/PageTitle";
//import Editor from "../components/add-new-post/Editor";
import "react-quill/dist/quill.snow.css";
// import "../../assets/quill.css";
import axios from '../axios';

class AddNewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
		e.preventDefault();
        console.log(this.state);

        axios.post('posts', this.state)
        .then(response => {
          console.log(response)
        this.setState({
          data: response.data
        })})
        .catch(error => {
          console.log(error)
        })

  }
  render(){
    const { title, content} = this.state

return(

  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
    </Row>
    <Form onSubmit={this.handleSubmit}>
    <Row>
      {/* Editor */}
      <Col lg="9" md="12">
      <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Your Post Title" name="title" onChange={this.handleChange} value={title}/>
        
        <textarea style={{width: 770, height: 300, marginTop: 10}} name="content"  value={content} onChange={this.handleChange} placeholder="Your Post Content"/>
        
      </Form>
    </CardBody>
  </Card>
        
        <Button type="submit">Submit form</Button>
      </Col>
    


    </Row>
    </Form> 
  </Container>
)
  }}

export default AddNewPost;
