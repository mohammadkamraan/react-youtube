import { FC } from "react";
import List from "../../../dom/list/List";
import HomeSidebarItem from "./home-sidebar-item/HomeSidebarItem";
import { genericSection } from "../../../../data/sidebar-options";

import styles from "./home-sidebar.module.scss";

const HomeSidebar: FC = () => {
  return (
    <aside className={styles["sidebar"]}>
      <List list={genericSection} itemKey='option' component={HomeSidebarItem} />
    </aside>
  );
};

export default HomeSidebar;
