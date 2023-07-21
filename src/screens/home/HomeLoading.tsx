import { FC } from "react";
import List from "../../components/dom/list/List";

import GridSystem from "../../components/UI/grid-system/GridSystem";
import VideoCardLoading from "../../components/UI/loading-components/VideoCardLoading";

import styles from "./home.module.scss";

const HomeLoading: FC = () => {
  return (
    <div className={styles["wrapper"]}>
      <GridSystem className={styles["videos-wrapper"]} columns={12} gap='1rem'>
        <List
          list={new Array(20).fill(0)}
          itemKey='key'
          component={VideoCardLoading}
        />
      </GridSystem>
    </div>
  );
};

export default HomeLoading;
