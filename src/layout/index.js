import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Styles from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import Navigation from "../components/Navigation";
import Home from "../pages/Home/index";
import Orders from "../pages/Orders";
import Login from "../pages/Login";

const App = () => {
  return (
    <Styles.App>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/sign-in" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/orders" component={Orders} />
        </Switch>
      </Router>
    </Styles.App>
  );
};

export default App;
