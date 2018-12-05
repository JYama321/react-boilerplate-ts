import * as React from "react"
import * as ReactDOM from "react-dom"
import { Hello } from "./components/Hello"

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("app")
)

if (process.env.NODE_ENV === "production") {
  require("offline-plugin/runtime").install() // eslint-disable-line global-require
}
