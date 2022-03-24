import React from "react";

// Components
import CloseButton from "../CloseButton";
import SidebarContent from "./SidebarContent";
import SocialMediaLinks from "../SocialMediaLinks";

const Sidebar = props => {
  return (
    <aside className={props.className}>
      <header className="sidebar-header">
        <img src="../../assets/images/logo.svg" alt="" className="logo" />
      </header>
      <SidebarContent />
      <SocialMediaLinks />
    </aside>
  );
};

export default Sidebar;
