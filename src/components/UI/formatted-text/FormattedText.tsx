import { cloneElement, FC, ReactElement } from "react";
import { IComponentChildren } from "../../../interfaces";

import styles from "./formatted-text.module.scss";

interface FormattedTextProps extends IComponentChildren {
  className?: string;
}

const FormattedText: FC<FormattedTextProps> = props => {
  return cloneElement(props.children as ReactElement, {
    className: styles["formatted-text"] + " " + props.className,
  });
};

export default FormattedText;
