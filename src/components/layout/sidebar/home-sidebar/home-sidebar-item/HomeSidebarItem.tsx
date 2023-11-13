import { FC } from "react";
import { NavLink } from "react-router-dom";

import { IStaticSidebarOptions } from "../../../../../interfaces";
import Text from "../../../../UI/text/Text";

import styles from "./home-sidebar-item.module.scss";

interface IHomeSidebarItemProps {
  option: IStaticSidebarOptions;
}

const HomeSidebarItem: FC<IHomeSidebarItemProps> = ({ option }) => {
  return (
    <NavLink
      to={{ pathname: option.link }}
      className={({ isActive }) =>
        isActive ? `${styles["sidebar-item"]} ${styles["active"]}` : styles["sidebar-item"]
      }
    >
      <div>
        {option.icon}
        <Text fontSize='0.75rem'>
          <p>{option.option}</p>
        </Text>
      </div>
    </NavLink>
  );
};

export default HomeSidebarItem;
