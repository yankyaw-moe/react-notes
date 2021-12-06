import React from "react";

function nameTag(props) {
  return <h3 className="name">{props.children}</h3>;
}

export default nameTag;
