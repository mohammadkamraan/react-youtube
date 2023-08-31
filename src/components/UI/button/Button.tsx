import { FC } from "react";

import styles from "./button.module.scss";

type ButtonProps = {
  onClick: any;
  children: any;
  radios?: "full" | "left" | "right";
  color?: "light" | "dark";
  className?: string;
};

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  radios = "full",
  color = "light",
  className,
}) => {
  return (
    <button
      className={`${styles["button"]} ${styles[radios + "-rounded"]}  ${
        styles[color + "-color"]
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
