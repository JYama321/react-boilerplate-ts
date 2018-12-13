// @ts-ignore
import Top from "containers/Top";
import * as React from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import { AppWrapper } from "./appWrapper";

class App extends React.Component {
  public render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js TS Boilerplate"
          defaultTitle="React Ts Boilerplate"
        >
          <meta name="description" content="React Ts Boilerplate" />
        </Helmet>
        <Switch>
          <Route exact={true} path="/" component={Top} />
        </Switch>
      </AppWrapper>
    );
  }
}

export default App;
