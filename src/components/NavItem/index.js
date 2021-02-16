import React from "react";
import { StyledLi } from "./styles";
import { Link } from "react-router-dom";

const NavItem = ({ url, name, icon }) => {
  return (
    <StyledLi className="nav__item">
      <Link to={`${url}`}>
        {icon ? <i className={`${icon} mr-3`}></i> : null}
        <span>{name}</span>
      </Link>
    </StyledLi>
  );
};

export default NavItem;
