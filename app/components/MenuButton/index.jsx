import React from "react";

const MenuButton = props => {
  return (
    <button onClick={props.handleClick} className="sidebar-toggle">
      <i className="fas fa-bars"></i>
    </button>
  );
};

export default MenuButton;
