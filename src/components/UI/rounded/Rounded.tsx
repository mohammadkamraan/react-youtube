import { FC } from "react";
import { IComponentChildren } from "../../../interfaces";

import styles from "./rounded.module.scss";

interface RoundedProps extends IComponentChildren {
  className?: string;
}

const Rounded: FC<RoundedProps> = props => {
  return (
    <div className={styles["wrapper"] + " " + props.className}>
      {props.children}
    </div>
  );
};

export default Rounded;
