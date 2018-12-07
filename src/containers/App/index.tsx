// @ts-ignore
import { Hello } from "components/Hello"
import * as React from "react"
import { Helmet } from "react-helmet"
import { Route, Switch } from "react-router-dom"
import { AppWrapper } from "./appWrapper"

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
          <Route exact={true} path="/" render={() => <Hello />} />
        </Switch>
      </AppWrapper>
    )
  }
}

export default App
