import { FC, useState, MouseEvent } from "react";
import Box from "../../box/Box";
import Button from "../../button/Button";
import ChannelBriefView from "../../channel-brief-view/ChannelBriefView";
import Text from "../../text/Text";

import styles from "./video-description.module.scss";
import ConditionalRender from "../../../dom/conditional-render/ConditionalRender";

type VideoDescriptionProps = {
  videoViews: number;
  publishedAt: string;
  description: string;
  avatar: string;
  channelTitle: string;
};

const VideoDescription: FC<VideoDescriptionProps> = ({
  publishedAt,
  videoViews,
  description,
  avatar,
  channelTitle,
}) => {
  const [isShowMoreAvailable, setIsShowMoreAvailable] = useState<boolean>(false);

  const onBoxClick = () => {
    setIsShowMoreAvailable(showMore => !showMore);
  };

  const onVideosClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  const onSubscribe = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  return (
    <Box className={`${styles["wrapper"]} ${isShowMoreAvailable && styles["wrapper-full"]}`} onClick={onBoxClick}>
      <div className={styles["views-wrapper"]}>
        <Text>
          <p>{videoViews} views</p>
        </Text>
        <Text>
          <p>{publishedAt}</p>
        </Text>
      </div>
      <Text className={styles["description-text"]}>
        <p>{description}</p>
      </Text>
      <hr />
      <ConditionalRender condition={isShowMoreAvailable}>
        <ChannelBriefView avatar={avatar} name={channelTitle} size='medium' subscriptions={9} />
        <div className={styles["channel-actions"]}>
          <Button onClick={onVideosClick} className={styles["channel-action"]} color='dark'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={styles["channel-actions-svg"]}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
              />
            </svg>
            <Text>
              <p>Videos</p>
            </Text>
          </Button>
          <Button onClick={onSubscribe} className={styles["channel-action"]} color='dark'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={styles["channel-actions-svg"]}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
            <Text>
              <p>Subscribe</p>
            </Text>
          </Button>
        </div>
      </ConditionalRender>
    </Box>
  );
};

export default VideoDescription;
