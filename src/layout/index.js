import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Styles from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import Navigation from "../components/Navigation";
import Home from "../pages/Home/index";
import Orders from "../pages/Orders";
import Login from "../pages/Login";
import { auth } from "../firebase/firebase";
import { useStateValue } from "../contexts/StateProvider";
import Payment from "../pages/Payment";

const App = () => {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(`THEN USER IS >>> ${authUser}`, authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [user]);
  return (
    <Styles.App>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/sign-in" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/payment" component={Payment} />
        </Switch>
      </Router>
    </Styles.App>
  );
};

export default App;
