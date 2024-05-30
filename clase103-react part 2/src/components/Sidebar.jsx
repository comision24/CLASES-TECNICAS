import React from "react";
import logoDH from "../assets/images/logo-DH.png";
import { NavItem } from "./NavItem";
import PropTypes from "prop-types";
export function Sidebar(props) {
  // { navItems }
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar */}

      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon">
          <img className="w-100" src={logoDH} alt="Digital House" />
        </div>
      </a>

      {/* Divider */}
      <hr className="sidebar-divider my-0" />

      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - DH movies</span>
        </a>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider" />

      {/* Heading */}
      <div className="sidebar-heading">Actions</div>

      {/* Nav Items - Pages / Charts / Tables */}
      {props.navItems.map((item) => {
        return <NavItem key={item.id} href={item.link} icon={item.icon} text={item.text}/>; // { href, icon, text }
      })}
      {/* End Nav Items - Pages / Charts / Tables */}

      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* End of Sidebar */}
    </ul>
  );
}

Sidebar.propTypes = {
  navItems: PropTypes.array,
};

const defaultValue = [
  {
    id: 1,
    text: "Default",
    icon: "fa-table",
    link: "/default",
  },
];
Sidebar.defaultProps = {
  navItems: defaultValue,
};
