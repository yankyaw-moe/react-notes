/* eslint-disable react/jsx-key */
import React from "react";

function nameTag(props) {
  // <Fragment></Fragment>
  // <></>
  // <div></div>
  // [] => return Array
  return (
    <div className="name">
      <h3>First Name {props.firstName}</h3>
      <h3>Last Name {props.lastName}</h3>
    </div>
  );
}

export default nameTag;
