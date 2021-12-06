/* eslint-disable react/jsx-key */
import React from "react";

function nameTag(props) {
  // <Fragment></Fragment>
  // <></>
  return [
    <h3 className="name">First Name {props.firstName}</h3>,
    <h3 className="name">Last Name {props.lastName}</h3>,
  ];
}

export default nameTag;
