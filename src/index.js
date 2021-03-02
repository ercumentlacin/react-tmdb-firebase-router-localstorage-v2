import React from "react";
import ReactDOM from "react-dom";
import reducer, { initialState } from "./contexts/reducer";
import { StateProvider } from "./contexts/StateProvider";
import App from "./layout/";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
