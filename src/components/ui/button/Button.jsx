import React from "react";

const Button = ({ text, className = "", btnEvent = () => {} }) => {
  return (
    <React.Fragment>
      <button className={className} onClick={btnEvent}>
        {text}
      </button>
    </React.Fragment>
  );
};

export default Button;
