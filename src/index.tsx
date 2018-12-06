// @ts-ignore
import App from "containers/App";
import { createBrowserHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("app")
);

if (process.env.NODE_ENV === "production") {
  require("offline-plugin/runtime").install(); // eslint-disable-line global-require
}
