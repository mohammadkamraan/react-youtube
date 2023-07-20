import { cloneElement, FC, isValidElement, memo, ReactElement } from "react";

import { IComponentChildren } from "../../../interfaces";

import styles from "./text.module.scss";

interface IText extends IComponentChildren {
  color?: "white" | "gray";
  fontSize?: string;
  fontWight?: "normal" | "bold" | "thin";
}

const Text: FC<IText> = props => {
  const classNamesGenerator = () => {
    let classes = styles["text"];
    if (props.color) {
      classes += " ";
      classes += styles[props.color];
    }
    if (props.fontWight) {
      classes += " ";
      classes += styles[props.fontWight];
    }
    return classes;
  };

  if (!isValidElement(props.children)) return null;
  return cloneElement(props.children as ReactElement, {
    className: classNamesGenerator(),
    style: {
      fontSize: props.fontSize,
    },
  });
};

export default memo(Text);
