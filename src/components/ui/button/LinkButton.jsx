import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ path, className = "", label, btnEvent = () => {} }) => {
  return (
    <React.Fragment>
      <Link to={path} className={className} onClick={btnEvent}>
        {label}
      </Link>
    </React.Fragment>
  );
};

export default LinkButton;
