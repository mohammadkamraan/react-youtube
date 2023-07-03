import { FC } from "react";

import { IComponentChildren } from "../../../interfaces";

import styles from "./sidebar-section.module.scss";

const SidebarSection: FC<IComponentChildren> = props => {
  return <div className={styles["sidebar-section"]}>{props.children}</div>;
};

export default SidebarSection;
