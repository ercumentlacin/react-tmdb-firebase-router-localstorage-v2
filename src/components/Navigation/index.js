import React from "react";
import { Link } from "react-router-dom";
import NavItem from "../NavItem";
import Orders from "../Orders";
import SearchBox from "../SearchBox";
import Styles from "./styles";
// Components

const Navigation = () => {
  return (
    <Styles.Navigation>
      <nav className="nav">
        <div className="nav__brand">
          <Link to="/">E-MovieDB</Link>
        </div>
        <ul>
          <NavItem url={"/"} name={"Home"} icon={"fas fa-home"} />
          <NavItem
            url={"/popular"}
            name={"Popular"}
            icon={"fas fa-chart-line"}
          />
          <SearchBox name={"search"} icon={"fas fa-search"} />
          <NavItem
            url={"/sign-in"}
            name={"Sign in"}
            icon={"fas fa-sign-in-alt"}
          />
          <Orders
            url={"/orders"}
            name={"Orders"}
            icon={"fas fa-shopping-basket"}
            orderCount={0}
          />
        </ul>
        <div className="border-top my-3 w-75 mx-auto bg-secondary"></div>
      </nav>
    </Styles.Navigation>
  );
};

export default Navigation;
