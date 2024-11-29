import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAsymmetrik, FaUsers, FaArrowsAltH } from "react-icons/fa";
import { MdDashboard, MdFrontLoader, MdAddBusiness } from "react-icons/md";
import { GrTransaction, GrPower } from "react-icons/gr";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <div
      className={`sidebar ${
        isCollapsed ? "w-[80px]" : "w-[230px]"
      } h-[98%] fixed px-5 bg-black/90 rounded-2xl text-white transition-all duration-300`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between mt-3 py-2 cursor-pointer">
        <div
          className={`flex items-center ${isCollapsed ? "justify-center" : ""}`}
        >
          <FaAsymmetrik
            className={`text-secondary ${isCollapsed ? "text-3xl" : "mr-2"}`}
          />
          {!isCollapsed && <h2 className="text-2xl">FINMETRICS</h2>}
        </div>
        <p onClick={() => setIsCollapsed(!isCollapsed)}>
          <FaArrowsAltH className="text-secondary text-xs ml-2" />
        </p>
      </div>

      {/* Navigation Links */}
      <ul className={`mt-20 ${isCollapsed ? "space-y-4" : ""}`}>
        <li className="mb-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm py-2 rounded-md cursor-pointer flex items-center ${
                isCollapsed ? "justify-center" : "px-5"
              } hover:bg-secondary ${isActive ? "bg-secondary" : ""}`
            }
          >
            <MdDashboard className="text-2xl" />
            {!isCollapsed && <span className="ml-2">Dashboard</span>}
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink
            to="/boarding"
            className={({ isActive }) =>
              `text-sm py-2 rounded-md cursor-pointer flex items-center ${
                isCollapsed ? "justify-center" : "px-5"
              } hover:bg-secondary ${isActive ? "bg-secondary" : ""}`
            }
          >
            <MdFrontLoader className="text-2xl" />
            {!isCollapsed && <span className="ml-2">Onboarding</span>}
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `text-sm py-2 rounded-md cursor-pointer flex items-center ${
                isCollapsed ? "justify-center" : "px-5"
              } hover:bg-secondary ${isActive ? "bg-secondary" : ""}`
            }
          >
            <FaUsers className="text-2xl" />
            {!isCollapsed && <span className="ml-2">Users</span>}
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink
            to="/merchant-acquisition"
            className={({ isActive }) =>
              `text-sm py-2 rounded-md cursor-pointer flex items-center ${
                isCollapsed ? "justify-center" : "px-5"
              } hover:bg-secondary ${isActive ? "bg-secondary" : ""}`
            }
          >
            <MdAddBusiness className="text-2xl" />
            {!isCollapsed && <span className="ml-2">Merchants</span>}
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink
            to="/transaction-volume"
            className={({ isActive }) =>
              `text-sm py-2 rounded-md cursor-pointer flex items-center ${
                isCollapsed ? "justify-center" : "px-5"
              } hover:bg-secondary ${isActive ? "bg-secondary" : ""}`
            }
          >
            <GrTransaction className="text-2xl" />
            {!isCollapsed && <span className="ml-2">Transaction</span>}
          </NavLink>
        </li>
      </ul>

      <Link to="/">
        <div
          className={`card-app absolute bottom-3 right-0 left-0 mx-3 p-4 rounded-md text-center h-32 flex items-center justify-center ${
            isCollapsed ? "h-[80px]" : ""
          }`}
        >
          <div>
            <GrPower
              className={`text-black ${isCollapsed ? "text-4xl" : "text-7xl"}`}
            />
            {!isCollapsed && <span>App</span>}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
