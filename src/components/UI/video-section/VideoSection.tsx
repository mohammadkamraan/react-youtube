import { FC } from "react";

import Player from "react-player/youtube";

import { VIDEOS_BASE_URL } from "../../../constants/constants";
import FormattedText from "../formatted-text/FormattedText";
import Text from "../text/Text";
import VideoDetail from "./video-detail/VideoDetail";

import styles from "./video-section.module.scss";

type VideoSectionProps = {
  videoId: string;
  videoDetails: any;
  comments: any;
};

const VideoSection: FC<VideoSectionProps> = props => {
  console.log("video section", props);
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
        channelAvatar='https://yt3.ggpht.com/rXzZ5r9s5cRcSldQnDuKq69gnOxUUFR_SZKvYVR70djZw19vTYm0JSt3LWTtuhTgALbujC8Zzw=s88-c-k-c0x00ffffff-no-rj-mo'
        channelId={props.videoDetails.snippet.channelId}
        channelName={props.videoDetails.snippet.channelTitle}
        channelSubscriptions={20}
        videoLikes={props.videoDetails.statistics.likeCount}
      />
    </div>
  );
};

export default VideoSection;
