/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import axios from '../axios';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

import { useHistory } from 'react-router-dom';

let ps = null;

export default function BlogPosts(props) {
      // // First list of posts.
      // PostsListOne: [
      //   {
      //     backgroundImage: require("../images/content-management/1.jpeg"),
      //     category: "Business",
      //     categoryTheme: "dark",
      //     author: "Anna Kunis",
      //     authorAvatar: require("../images/avatars/1.jpg"),
      //     title: "Conduct at an replied removal an amongst",
      //     body:
      //       "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
      //     date: "28 February 2019"
      //   },
      //   {
      //     backgroundImage: require("../images/content-management/2.jpeg"),
      //     category: "Travel",
      //     categoryTheme: "info",
      //     author: "James Jamerson",
      //     authorAvatar: require("../images/avatars/2.jpg"),
      //     title: "Off tears are day blind smile alone had ready",
      //     body:
      //       "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     backgroundImage: require("../images/content-management/3.jpeg"),
      //     category: "Technology",
      //     categoryTheme: "royal-blue",
      //     author: "Jimmy Jackson",
      //     authorAvatar: require("../images/avatars/2.jpg"),
      //     title: "Difficult in delivered extensive at direction",
      //     body:
      //       "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     backgroundImage: require("../images/content-management/4.jpeg"),
      //     category: "Business",
      //     categoryTheme: "warning",
      //     author: "John James",
      //     authorAvatar: require("../images/avatars/3.jpg"),
      //     title: "It so numerous if he may outlived disposal",
      //     body:
      //       "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
      //     date: "29 February 2019"
      //   }
      // ],

      // // Second list of posts.
      // PostsListTwo: [
      //   {
      //     backgroundImage: require("../images/content-management/5.jpeg"),
      //     category: "Travel",
      //     categoryTheme: "info",
      //     author: "Anna Ken",
      //     authorAvatar: require("../images/avatars/0.jpg"),
      //     title:
      //       "Attention he extremity unwilling on otherwise cars backwards yet",
      //     body:
      //       "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     backgroundImage: require("../images/content-management/6.jpeg"),
      //     category: "Business",
      //     categoryTheme: "dark",
      //     author: "John James",
      //     authorAvatar: require("../images/avatars/1.jpg"),
      //     title:
      //       "Totally words widow one downs few age every seven if miss part by fact",
      //     body:
      //       "Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...",
      //     date: "29 February 2019"
      //   }
      // ],

      // Third list of posts.
      

      // // Fourth list of posts.
      // PostsListFour: [
      //   {
      //     backgroundImage: require("../images/content-management/7.jpeg"),
      //     author: "Alene Trenton",
      //     authorUrl: "#",
      //     category: "News",
      //     categoryUrl: "#",
      //     title: "Extremity so attending objection as engrossed",
      //     body:
      //       "Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     backgroundImage: require("../images/content-management/8.jpeg"),
      //     author: "Chris Jamie",
      //     authorUrl: "#",
      //     category: "News",
      //     categoryUrl: "#",
      //     title: "Bed sincerity yet therefore forfeited his",
      //     body:
      //       "Speaking throwing breeding betrayed children my to. Me marianne no he horrible produced ye. Sufficient unpleasing and...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     backgroundImage: require("../images/content-management/9.jpeg"),
      //     author: "Monica Jordan",
      //     authorUrl: "#",
      //     category: "News",
      //     categoryUrl: "#",
      //     title: "Object remark lively all did feebly excuse our",
      //     body:
      //       "Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel not seeing...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     backgroundImage: require("../images/content-management/10.jpeg"),
      //     author: "Monica Jordan",
      //     authorUrl: "#",
      //     category: "News",
      //     categoryUrl: "#",
      //     title: "His followed carriage proposal entrance",
      //     body:
      //       "For county now sister engage had season better had waited. Occasional mrs interested far expression directly as regard...",
      //     date: "29 February 2019"
      //   }
      // ]
   
  

 
  	let { id } = useParams();
  	const [ postInfo, setPostInfo ] = useState({});
  	const [ PostsListThree, setPostsListThree ] = useState({});
  	useEffect(
    () => {
      async function fetchData() {
        const request = await axios.get(`posts`);
        console.log('REQUESt');
        console.log(request.data[0]);
        setPostInfo(request.data[0]);
        setPostsListThree(request.data[1]);

        return request;
      }

      fetchData();
    },
    [id ]
  );
  	{console.log(postInfo)}
    

    return (
    	<React.Fragment>
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Blog Posts" subtitle="Components" className="text-sm-left" />
        </Row>

       

       / Third Row of Posts 
        <Row>
          
            <Col lg="4" >
            {console.log(postInfo)}
              <Card small className="card-post mb-4">
                <CardBody>
                  <h5 className="card-title">{postInfo.content}</h5>
                  <p className="card-text text-muted">{postInfo.content}</p>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      //style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by James Khan
                    </a>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">
                        {postInfo.post_id}
                      </span>
                      <small className="text-muted">{postInfo.date_posted}</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <Button size="sm" theme="white">
                      <i className="far fa-bookmark mr-1" /> Bookmark
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          ))
        </Row>


        <Row>
          
          <Col lg="4" >
          {console.log(PostsListThree)}
            <Card small className="card-post mb-4">
              <CardBody>
                <h5 className="card-title">{PostsListThree.content}</h5>
                <p className="card-text text-muted">{PostsListThree.content}</p>
              </CardBody>
              <CardFooter className="border-top d-flex">
                <div className="card-post__author d-flex">
                  <a
                    href="#"
                    className="card-post__author-avatar card-post__author-avatar--small"
                    //style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                  >
                    Written by James Khan
                  </a>
                  <div className="d-flex flex-column justify-content-center ml-3">
                    <span className="card-post__author-name">
                      {postInfo.post_id}
                    </span>
                    <small className="text-muted">{PostsListThree.date_posted}</small>
                  </div>
                </div>
                <div className="my-auto ml-auto">
                  <Button size="sm" theme="white">
                    <i className="far fa-bookmark mr-1" /> Bookmark
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        ))
      </Row>

      
      </Container>
      </React.Fragment>
    );
  }



