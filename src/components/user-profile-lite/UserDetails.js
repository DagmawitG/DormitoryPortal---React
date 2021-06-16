import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
} from "shards-react";

const UserDetails = ({ userDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={userDetails.avatar}
          alt={userDetails.name}
          width="110"
        />
      </div>
      <h4 className="mb-0">{userDetails.name}</h4>
      <span className="text-muted d-block mb-2">{userDetails.Department}</span>
      <span className="text-muted d-block mb-2">{userDetails.ID_Number}</span>
      {/* <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">person_add</i> Follow
      </Button> */}
    </CardHeader>
  </Card>
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: "Dagi ",
    avatar: require("./../../images/avatars/1.png"),
    Department: "Software 3rd year",
    ID_Number : "atr/005256/11"
  }
};

export default UserDetails;
