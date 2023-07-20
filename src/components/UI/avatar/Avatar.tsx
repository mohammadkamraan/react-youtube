import { FC } from "react";

import styles from "./avatar.module.scss";

interface IAvatar {
  avatarSource: string;
  lazyLoad?: boolean;
  size?: string;
}

const Avatar: FC<IAvatar> = ({ avatarSource, size, lazyLoad = false }) => {
  return (
    <img
      src={avatarSource}
      loading={lazyLoad ? "lazy" : "eager"}
      style={{ width: size, height: size }}
      className={styles["avatar"]}
    />
  );
};

export default Avatar;
