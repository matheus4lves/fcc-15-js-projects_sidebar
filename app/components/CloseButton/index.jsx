import React from "react";

const CloseButton = props => {
  return (
    <button onClick={props.handleClick} className="close-btn">
      <i className="fas fa-times"></i>
    </button>
  );
};

export default CloseButton;
