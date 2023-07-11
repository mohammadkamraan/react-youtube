import { FC } from "react";
import { NavLink } from "react-router-dom";

import { IStaticSidebarOptions } from "../../../interfaces";

import styles from "./sidebar-item.module.scss";

interface ISidebarItem {
  option: IStaticSidebarOptions;
}

const SidebarItem: FC<ISidebarItem> = ({ option }) => {
  return (
    <NavLink
      to={option.link}
      className={({ isActive }) =>
        isActive
          ? `${styles["sidebar-item"]} ${styles["active"]}`
          : styles["sidebar-item"]
      }
    >
      <div>
        {option.icon} <p>{option.option}</p>
      </div>
    </NavLink>
  );
};

export default SidebarItem;
