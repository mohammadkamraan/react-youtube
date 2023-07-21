import { FC, memo, useState } from "react";

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
  previewImage: string;
  className?: string;
}

const VideoCard: FC<IVideoCard> = props => {
  const [play, setPlay] = useState<boolean>(false);
  const [timerId, setTimerId] = useState<any>(null);

  const mouseEnterHandler = () => {
    const timerId = setTimeout(() => {
      setPlay(true);
    }, 3000);

    setTimerId(timerId);
  };

  const mouseLeaveHandler = () => {
    clearTimeout(timerId as any);
    setPlay(false);
  };

  return (
    <Link
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      to={props.link}
      className={styles["video-card"] + " " + props.className}
    >
      <div className={styles["video-wrapper"]}>
        <Player
          playing={play}
          url={VIDEOS_BASE_URL + props.videoId}
          width='100%'
          height='100%'
          light={!play}
          playIcon={<></>}
        />
      </div>
      <div className={styles["detail"]}>
        <Avatar avatarSource={props.avatarUrl} lazyLoad />
        <div>
          <Text className={styles["video-title"]}>
            <p>{props.title}</p>
          </Text>
          <Text color='gray'>
            <p>{props.channel}</p>
          </Text>
          <div className={styles["video-dynamic-details"]}>
            <Text color='gray'>
              <p>{props.views}</p>
            </Text>
            <p>.</p>
            <Text color='gray'>
              <p>{props.publishedAt}</p>
            </Text>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(VideoCard);
