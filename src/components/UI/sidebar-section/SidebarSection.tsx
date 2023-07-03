import { FC } from "react";

import { IComponentChildren } from "../../../interfaces";
import ConditionalRender from "../../dom/conditional-render/ConditionalRender";

import styles from "./sidebar-section.module.scss";

interface ISidebarSection extends IComponentChildren {
  hasLine: boolean;
}

const SidebarSection: FC<ISidebarSection> = props => {
  return (
    <>
      <div className={styles["sidebar-section"]}>{props.children}</div>
      <ConditionalRender
        condition={props.hasLine}
        trueComponent={<hr className={styles["divider-line"]} />}
      />
    </>
  );
};

export default SidebarSection;
