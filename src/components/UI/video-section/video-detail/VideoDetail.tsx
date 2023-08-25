import { FC } from "react";
import Avatar from "../../avatar/Avatar";
import Rounded from "../../rounded/Rounded";
import Text from "../../text/Text";

import styles from "./video-detail.module.scss";

type VideoDetailProps = {
  channelId: string | number;
  channelAvatar: string;
  channelSubscriptions: number;
  channelName: string;
  videoLikes: number;
};

const VideoDetail: FC<VideoDetailProps> = props => {
  return (
    <div className={styles["wrapper"]}>
      {/* right section div */}
      <div>
        <div>
          {/* channel section */}
          <div>
            <Avatar lazyLoad avatarSource={props.channelAvatar} size='2rem' />
            <div>
              <Text>
                <p>{props.channelName}</p>
              </Text>
              <Text color='gray' fontWight='thin'>
                <p>{props.channelSubscriptions}</p>
              </Text>
            </div>
          </div>

          <Rounded>
            <button>Subscribe</button>
          </Rounded>
        </div>
      </div>
      {/* left section div */}
      <div>
        <Rounded>
          <button></button>
          <div></div>
          <button></button>
        </Rounded>
        <Rounded>
          <button></button>
        </Rounded>
        <Rounded>
          <button></button>
        </Rounded>
        <Rounded>
          <button></button>
        </Rounded>
      </div>
    </div>
  );
};

export default VideoDetail;
