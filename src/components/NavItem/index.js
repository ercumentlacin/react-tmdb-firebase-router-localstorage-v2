import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ url, name, icon }) => {
  return (
    <li className="nav__item">
      <Link to={`${url}`}>
        {icon ? <i className={icon}></i> : null}
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
