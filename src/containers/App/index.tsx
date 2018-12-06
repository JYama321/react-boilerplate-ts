// @ts-ignore
import { Hello } from "components/Hello"
import * as React from "react"
import { Helmet } from "react-helmet"
import { Route, Switch } from "react-router-dom"
import { AppWrapper } from "./appWrapper"

export default function App(): any {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js TS Boilerplate"
        defaultTitle="React Ts Boilerplate"
      >
        <meta name="description" content="React Ts Boilerplate" />
      </Helmet>
      <Switch>
        <Route
          exact={true}
          path="/"
          render={() => <Hello compiler="TypeScript" framework="React" />}
        />
      </Switch>
    </AppWrapper>
  )
}
