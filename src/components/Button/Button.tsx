import React from "react";
import "./Button.scss";

export enum Kind {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TERTIARY = "TERTIARY"
}

export interface ButtonProps {
  kind: Kind;
  label: string;
}

const Button = ({label, kind = Kind.PRIMARY}: ButtonProps) => {
  return <button className={kindToClassName(kind)}>{label}</button>;
};

const kindToClassName = (kind) => {
  if (kind == Kind.PRIMARY) {
    return "primary";
  } else if (kind == Kind.SECONDARY) {
    return "secondary";
  } else if (kind == Kind.TERTIARY) {
    return "tertiary";
  }
}

export default Button;