import React from "react";

// Components
import CloseButton from "../CloseButton";
import SidebarContent from "./SidebarContent";
import SocialMediaLinks from "../SocialMediaLinks";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <img src="../../assets/images/logo.svg" alt="" className="logo" />
        <CloseButton />
      </header>
      <SidebarContent />
      <SocialMediaLinks />
    </aside>
  );
};

export default Sidebar;
