import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../contexts/StateProvider";
import { auth } from "../../firebase/firebase";
import NavItem from "../NavItem";
import Orders from "../Orders";
import SearchBox from "../SearchBox";
import Styles from "./styles";
// Components

const Navigation = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  console.log(user);
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      history.push("/");
    }
  };
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
          {console.log(user)}
          {!user ? (
            <NavItem
              url={"/sign-in"}
              name={"Sign in"}
              icon={"fas fa-sign-in-alt"}
            />
          ) : (
            <NavItem
              url={"/sign-out"}
              name={"Sign out"}
              icon={"fas fa-sign-out-alt"}
              handleAuthentication={handleAuthentication}
            />
          )}
          <Orders
            url={"/orders"}
            name={"Orders"}
            icon={"fas fa-shopping-basket"}
            orderCount={basket?.length}
          />
        </ul>
        <div className="border-top my-3 w-75 mx-auto bg-secondary"></div>
      </nav>
    </Styles.Navigation>
  );
};

export default Navigation;
