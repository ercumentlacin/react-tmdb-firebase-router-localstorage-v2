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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OnOrders from "../pages/OnOrders";
import Poster from "../pages/Poster";
import Popular from "../pages/Popular";

const promise = loadStripe(`${process.env.REACT_APP_STRAPI_API}`);

const App = () => {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
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
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/on-orders" component={OnOrders} />
          <Route exact path="/poster/:poster" component={Poster} />
          <Route exact path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </Router>
    </Styles.App>
  );
};

export default App;
