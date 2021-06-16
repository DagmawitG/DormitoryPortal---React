import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import { makeStyles } from '@material-ui/core/styles';
import Image from '../images/avatars/very-light.jpg';

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    fontFamily: theme.typography.fontFamily = "Segoe UI",
    fontSize: theme.typography.fontSize='1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    backgroundImage: `url(${ Image })`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
    // filter: 'blur(3px)',
  },
}));


const DefaultLayout = ({ children, noNavbar, noFooter }) => {
  const classes = useStyles();

  return(
  <Container fluid className={classes.root}>
    <Row>
      <MainSidebar />
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {!noNavbar && <MainNavbar />}
        {children}
        {!noFooter && <MainFooter />}
      </Col>
    </Row>
  </Container>
  )
};

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
