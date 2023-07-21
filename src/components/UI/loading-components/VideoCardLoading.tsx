import { FC } from "react";

import styles from "./video-card-loading.module.scss";

const VideoCardLoading: FC = () => {
  return (
    <div className={styles["video-wrapper"]}>
      <div className={styles["video-skeleton"]}></div>
      <div className={styles["details-skeleton"]}>
        <div className={styles["avatar-skeleton"]}></div>
        <div>
          <p className={styles["title-skeleton"]}></p>
          <p className={styles["title-skeleton"]}></p>
        </div>
      </div>
    </div>
  );
};

export default VideoCardLoading;
