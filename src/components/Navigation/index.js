import React from "react";
import { Link } from "react-router-dom";
import Styles from "./styles";
// Components

const Navigation = () => {
  return (
    <Styles.Navigation>
      <nav className="nav">
        <div className="nav__brand">
          <Link to="/">E-MovieDB</Link>
        </div>
      </nav>
    </Styles.Navigation>
  );
};

export default Navigation;
