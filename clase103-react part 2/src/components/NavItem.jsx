import React from "react";
import PropTypes from 'prop-types'

export const NavItem = (props) => {
  // { href, icon, text }
  return (
    <li className="nav-item">
      <a className="nav-link collapsed" href={props.href}>
        <i className={`fas fa-fw ${props.icon}`}></i>
        <span>{props.text}</span>
      </a>
    </li>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string
}

NavItem.defaultProps = {
  href: "/",
  icon: "fa-folder",
  text: "No definido"
}