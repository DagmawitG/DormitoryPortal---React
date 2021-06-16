import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
} from "shards-react";

const AdminDetails = ({ adminDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={adminDetails.avatar}
          alt={adminDetails.name}
          width="110"
        />
      </div>
      <h4 className="mb-0">{adminDetails.name}</h4>
      <span className="text-muted d-block mb-2">{adminDetails.Department}</span>
      <span className="text-muted d-block mb-2">{adminDetails.Employe_ID}</span>
    </CardHeader>
  </Card>
);

AdminDetails.propTypes = {
  /**
   * The user details object.
   */
  adminDetails: PropTypes.object
};

AdminDetails.defaultProps = {
  adminDetails: {
    name: "Murad Abdella ",
    avatar: require("./../../images/avatars/1.jpg"),
    Department: "SITE",
    Employe_ID : "0023"
  }
};

export default AdminDetails;
