///<reference path="../node_modules/connected-react-router/index.d.ts"/>
import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import { routerMiddleware } from "connected-react-router";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { ApplicationState, rootReducer, rootSaga } from "./store";

export default function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({});
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // We'll create our store with the combined reducers/sagas, and the initial Redux state that
  // we'll be passing from our entry point.

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run(rootSaga);
  return store;
}
