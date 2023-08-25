import { FC } from "react";
import { useParams } from "react-router";
import { Methods } from "../../constants/constants";
import { HttpClient, IRequestsHandlerParameter } from "../../utils/httpClient";

import styles from "./video.module.scss";
import VideoSection from "../../components/UI/video-section/VideoSection";

import videoData from "../../utils/data/video.json";
import videoComments from "../../utils/data/comments.json";
import relatedVideos from "../../utils/data/relatedVideos.json";

const Video: FC = props => {
  const { videoId }: any = useParams();
  console.log(videoComments);
  return (
    <main className={styles["wrapper"]}>
      <VideoSection
        videoId={videoId}
        videoDetails={videoData.items[0]}
        comments={videoComments}
      />
      <div className={styles["related-video-section"]}></div>
    </main>
  );
};

export class VideoRequest extends HttpClient {
  append(): IRequestsHandlerParameter {
    return {
      requests: [
        {
          method: Methods.GET,
          url: "videos",
          params: {
            part: "contentDetails,snippet,statistics",
            id: this.urlParams.videoId as string,
          },
        },
        {
          method: Methods.GET,
          url: "search",
          params: {
            part: "id,snippet",
            videoCategoryId: this.urlParams.categoryId as string,
            maxResults: "1",
            type: "video",
          },
        },
        {
          method: Methods.GET,
          url: "commentThreads",
          params: {
            part: "id,snippet",
            maxResults: "1",
            videoId: this.urlParams.videoId as string,
          },
        },
      ],
      expectedData: [
        { dataKey: "video" },
        { dataKey: "relatedVideos" },
        { dataKey: "comments" },
      ],
    };
  }
}

export default Video;
