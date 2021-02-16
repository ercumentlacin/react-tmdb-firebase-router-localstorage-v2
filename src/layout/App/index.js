import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Styles from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import Navigation from "../../components/Navigation";
import Home from "../../pages/Home/index";
import Popular from "../../pages/Popular/";

const App = () => {
  return (
    <Styles.App>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/popular" component={Popular} />
        </Switch>
      </Router>
    </Styles.App>
  );
};

export default App;
