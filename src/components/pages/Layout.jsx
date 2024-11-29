import React, { useState } from "react";
import Sidebar from "../globals/Sidebar";
import TopNavbar from "../globals/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="dashboard-container flex">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div
        className={`main-content ${
          isCollapsed ? "ml-[80px]" : "ml-[230px]"
        } w-full`}
      >
        <TopNavbar />
        <div className="dashboard-section p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
