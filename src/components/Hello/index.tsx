import * as React from "react";
// @ts-ignore
import { HelloMessage } from "./style";

class Hello extends React.Component<{}> {
  public render() {
    return (
      <HelloMessage>Hello React Typescript boilerplate. Fuck you</HelloMessage>
    );
  }
}

export default Hello;
