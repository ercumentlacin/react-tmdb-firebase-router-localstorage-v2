import React from "react";
import Styles from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import Navigation from "../../components/Navigation";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Styles.App>
      <Router>
        <Navigation />
      </Router>
    </Styles.App>
  );
};

export default App;
