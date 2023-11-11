import { FC } from "react";

import Player from "react-player/youtube";

import { VIDEOS_BASE_URL } from "../../../constants/constants";
import FormattedText from "../formatted-text/FormattedText";
import Text from "../text/Text";
import VideoDescription from "./video-description/VideoDescription";
import VideoDetail from "./video-detail/VideoDetail";

import { AVATAR_URL } from "../../../constants/constants";

import styles from "./video-section.module.scss";

type VideoSectionProps = {
  videoId: string;
  videoDetails: any;
  comments: any;
};

const VideoSection: FC<VideoSectionProps> = props => {
  console.log(props);
  return (
    <div className={styles["wrapper"]}>
      <Player
        url={VIDEOS_BASE_URL + props.videoId}
        width='100%'
        controls
        height='34rem'
      />
      <FormattedText className={styles["video-title"]}>
        <Text fontSize='1.3rem'>
          <p>{props.videoDetails.snippet.title}</p>
        </Text>
      </FormattedText>
      <VideoDetail
        channelAvatar={AVATAR_URL}
        channelId={props.videoDetails.snippet.channelId}
        channelName={props.videoDetails.snippet.channelTitle}
        channelSubscriptions={20}
        videoLikes={props.videoDetails.statistics.likeCount}
      />
      <VideoDescription
        videoViews={props.videoDetails.statistics.viewCount}
        publishedAt={props.videoDetails.snippet.publishedAt}
        description={props.videoDetails.snippet.description}
        channelTitle={props.videoDetails.snippet.channelTitle}
        avatar={AVATAR_URL}
      />
    </div>
  );
};

export default VideoSection;
