import React from "react";
import { StyledLi } from "./styles";
import { Link } from "react-router-dom";

const NavItem = ({ url, name, icon, handleAuthentication }) => {
  return (
    <StyledLi className="nav__item">
      {name === "Sign out" ? (
        <Link onClick={handleAuthentication} to="/">
          {icon ? <i className={`${icon} mr-3`}></i> : null}
          <span>{name}</span>
        </Link>
      ) : (
        <Link to={`${url}`}>
          {icon ? <i className={`${icon} mr-3`}></i> : null}
          <span>{name}</span>
        </Link>
      )}
    </StyledLi>
  );
};

export default NavItem;
