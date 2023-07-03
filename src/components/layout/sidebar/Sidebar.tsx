import { FC, memo } from "react";

import List from "../../dom/list/List";
import SidebarSection from "../../UI/sidebar-section/SidebarSection";

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
        {/* <List /> */}
        <>test content</>
      </SidebarSection>
    </aside>
  );
};

export default memo(Sidebar);
