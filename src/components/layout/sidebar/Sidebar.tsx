import { FC, memo } from "react";

import List from "../../dom/list/List";
import SidebarSection from "../../UI/sidebar-section/SidebarSection";
import SidebarItem from "../../UI/sidebar-item/SidebarItem";

import {
  exploreSection,
  feedSection,
  genericSection,
  moreFromYoutube,
  settingsSection,
} from "../../../data/sidebar-options";

import styles from "./sidebar.module.scss";

const Sidebar: FC = () => {
  return (
    <aside className={styles["sidebar"]}>
      <SidebarSection hasLine>
        <List list={genericSection} component={SidebarItem} itemKey='option' />
      </SidebarSection>
      <SidebarSection hasLine>
        <List list={feedSection} component={SidebarItem} itemKey='option' />
      </SidebarSection>
      <SidebarSection hasLine>
        <List list={exploreSection} component={SidebarItem} itemKey='option' />
      </SidebarSection>
      <SidebarSection hasLine>
        <List list={moreFromYoutube} component={SidebarItem} itemKey='option' />
      </SidebarSection>
      <SidebarSection hasLine>
        <List list={settingsSection} component={SidebarItem} itemKey='option' />
      </SidebarSection>
    </aside>
  );
};

export default memo(Sidebar);
