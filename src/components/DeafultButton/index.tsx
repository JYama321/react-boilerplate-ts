import * as React from "react";
import { ButtonProps } from "./interfaces";
import { DefaultButton } from "./style";

export class ButtonNormal extends React.Component<ButtonProps> {
  public onClick = () => {
    this.props.onclick();
  };

  public render() {
    return (
      <DefaultButton onClick={this.onClick}>{this.props.text}</DefaultButton>
    );
  }
}
