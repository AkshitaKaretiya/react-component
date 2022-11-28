import * as React from "react";
import { useState, useEffect } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import UsersIcon from "@mui/icons-material/PermIdentity";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GridViewIcon from "@mui/icons-material/GridView";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import dtaLogo from "../assets/images/DTA-logo.svg";
import "./css/Sidemenu.css";
import { NavLink } from "react-router-dom";

const Sidemenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidemenu = () => {
    isOpen
      ? document.body.classList.add("collapse-sidemenu")
      : document.body.classList.remove("collapse-sidemenu");
    setIsOpen(!isOpen);
  };

  const redirectTo = () => {};

  return (
    <div>
      <div className="sidemenu">
        <div class="menu-icon" onClick={toggleSidemenu}>
          <span></span>
        </div>
        <div className="sidemenu-logo">
          <img src={dtaLogo} alt="logo" />
        </div>
        <ul>
          <li>
            <NavLink to="/dashboard">
              <GridViewIcon />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <SettingsIcon />
              <span>System confirmations</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/users">
              <UsersIcon />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <AdminPanelSettingsIcon />
              <span>Roles</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <WarningAmberIcon />
              <span>Threat Library</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidemenu;
