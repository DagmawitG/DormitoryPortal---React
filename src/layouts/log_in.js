import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

// import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
// import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const LoginLayout = ({ children, noFooter }) => (
  <Container fluid>
    <Row>
      {/* <MainSidebar /> */}
      <Col
        className="main-content p-0"
        lg={{ size: 12}}
        md={{ size: 11}}
        sm="12"
        tag="main"
      >
        {/* {!noNavbar && <MainNavbar />} */}
        {children}
        {!noFooter && <MainFooter />}
      </Col>
    </Row>
  </Container>
);

LoginLayout.propTypes = {

  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

LoginLayout.loginProps = {
  noFooter: false
};

export default LoginLayout;
