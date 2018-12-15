import * as React from "react";
import { ButtonProps } from "./interfaces";
import { DefaultButton } from "./style";

export function ButtonNormal(props: ButtonProps) {
  return <DefaultButton onClick={props.onclick}>{props.text}</DefaultButton>;
}
