import { FC, ReactElement, useState } from "react";

import Player from "react-player/youtube";
import { Link } from "react-router-dom";

import { VIDEOS_BASE_URL } from "../../../constants/constants";
import Avatar from "../avatar/Avatar";
import Text from "../text/Text";

import styles from "./video-card.module.scss";

interface IVideoCard {
  videoId: string;
  title: string;
  views: number;
  avatarUrl: string;
  channel: string;
  publishedAt: string;
  link: string;
  className?: string;
}

const VideoCard: FC<IVideoCard> = props => {
  const [play, setPlay] = useState(false);
  return (
    <Link
      onMouseEnter={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}
      to={props.link}
      className={styles["video-card"] + " " + props.className}
    >
      <div>
        <Player
          playing={play}
          url={VIDEOS_BASE_URL + props.videoId}
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <Avatar avatarSource={props.avatarUrl} lazyLoad />
        <div>
          <Text>{props.title}</Text>
          <div>
            <Text>{props.views}</Text>
            <Text>{props.publishedAt}</Text>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
