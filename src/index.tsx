// @ts-ignore
// @ts-ignore
import { ConnectedRouter } from "connected-react-router";
// @ts-ignore
import App from "containers/App";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import { initialState } from "./store";
import { history } from "./utils/history";

const store = configureStore(history, initialState);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);

if (process.env.NODE_ENV === "production") {
  require("offline-plugin/runtime").install(); // eslint-disable-line global-require
}
