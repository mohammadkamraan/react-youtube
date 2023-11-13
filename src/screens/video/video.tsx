import { FC } from "react";
import { useParams } from "react-router";
import { Methods } from "../../constants/constants";
import { HttpClient, IRequestsHandlerParameter } from "../../utils/httpClient";

import VideoSection from "../../components/UI/video-section/VideoSection";
import RelatedVideos from "../../components/UI/related-videos/RelatedVideos";

import videoData from "../../data/video.json";
import videoComments from "../../data/comments.json";
import relatedVideos from "../../data/relatedVideos.json";

import styles from "./video.module.scss";

const Video: FC = props => {
  const { videoId }: any = useParams();

  return (
    <main className={styles["wrapper"]}>
      <VideoSection videoId={videoId} videoDetails={videoData.items[0]} comments={videoComments} />
      <RelatedVideos relatedVideos={relatedVideos} />
    </main>
  );
};

export class VideoRequest extends HttpClient {
  append(): IRequestsHandlerParameter {
    return {
      requests: [
        {
          method: Methods.GET,
          url: "/fasdfasdfasdfvideos/sfasf",
          params: {
            part: "contentDetails,snippet,statistics",
            id: this.urlParams.videoId as string,
          },
        },
        {
          method: Methods.GET,
          url: "search/sdafasdf",
          params: {
            part: "id,snippet",
            videoCategoryId: this.urlParams.categoryId as string,
            maxResults: "1",
            type: "video",
          },
        },
        {
          method: Methods.GET,
          url: "commentThreads/asdfasdfasdf",
          params: {
            part: "id,snippet",
            maxResults: "1",
            videoId: this.urlParams.videoId as string,
          },
        },
      ],
      expectedData: [{ dataKey: "video" }, { dataKey: "relatedVideos" }, { dataKey: "comments" }],
    };
  }
}

export default Video;
