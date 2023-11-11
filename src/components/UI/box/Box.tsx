import { FC, MouseEvent } from "react";

import { IComponentChildren } from "../../../interfaces";

import styles from "./box.module.scss";

interface IVideosDescriptionProps extends IComponentChildren {
  onClick?: any;
  className?: string;
}

const Box: FC<IVideosDescriptionProps> = ({ children, onClick, className }) => {
  const onClickHandler = (event: MouseEvent<HTMLElement>) => {
    if (!onClick) return;
    onClick(event);
  };
  return (
    <div
      className={styles["wrapper"] + " " + className}
      onClick={onClickHandler}
    >
      {children}
    </div>
  );
};

export default Box;
