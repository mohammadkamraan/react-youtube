import { FC, useMemo } from "react";
import Avatar from "../avatar/Avatar";
import Text from "../text/Text";

import styles from "./channel-brief-view.module.scss";

type ChannelBriefViewProps = {
  size: "small" | "medium" | "large";
  avatar: string;
  name: string;
  subscriptions: number;
};

const ChannelBriefView: FC<ChannelBriefViewProps> = ({
  size,
  avatar,
  name,
  subscriptions,
}) => {
  const sizing = useMemo(() => {
    // large case senario
    let subscriptionFontSize = "1.5rem";
    let nameFontSize = "2rem";
    let avatarSize = "4rem";

    if (size === "small") {
      subscriptionFontSize = "0.8rem";
      nameFontSize = "";
      avatarSize = "";
    } else if (size === "medium") {
      subscriptionFontSize = "1.2rem";
      avatar = "2.5rem";
      nameFontSize = "";
    }
    return {
      subscriptionFontSize,
      nameFontSize,
      avatarSize,
    };
  }, [size]);

  return (
    <div className={styles["wrapper"]}>
      <Avatar lazyLoad avatarSource={avatar} size={sizing.avatarSize} />
      <div>
        <Text fontSize={sizing.nameFontSize}>
          <p>{name}</p>
        </Text>
        <Text
          color='gray'
          fontWight='thin'
          fontSize={sizing.subscriptionFontSize}
        >
          <p>{subscriptions} subscribers</p>
        </Text>
      </div>
    </div>
  );
};

export default ChannelBriefView;
