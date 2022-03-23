import React, { useState } from "react";

// Components
import Sidebar from "./components/Sidebar";
import MenuButton from "./components/MenuButton";

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const hideSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <>
      <MenuButton handleClick={toggleSidebar} />
      <Sidebar handleClick={hideSidebar} className={`sidebar${isSidebarVisible ? " show-sidebar" : ""}`} />
    </>
  );
};

export default App;
