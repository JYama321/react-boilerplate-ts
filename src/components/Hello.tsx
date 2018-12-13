import * as React from "react";
import { HelloMessage } from "../containers/Top/style";

class Hello extends React.Component<{}> {
  public render() {
    return (
      <HelloMessage>Hello React Typescript boilerplate. Fuck you</HelloMessage>
    );
  }
}

export default Hello;
