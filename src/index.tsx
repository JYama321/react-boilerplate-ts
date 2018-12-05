// @ts-ignore
import App from "containers/App";
import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("app"));

if (process.env.NODE_ENV === "production") {
  require("offline-plugin/runtime").install(); // eslint-disable-line global-require
}
