import { FC } from "react";
import { Location, Params, useParams } from "react-router";
import { Methods, VIDEOS_BASE_URL } from "../../constants/constants";
import { HttpClient } from "../../utils/httpClient";
import Player from "react-player/youtube";

const Video: FC = props => {
  const { videoId } = useParams();
  return (
    <>
      <Player url={VIDEOS_BASE_URL + videoId} controls />
    </>
  );
};

export class VideoRequest extends HttpClient {
  constructor(urlParams: Readonly<Params<string>>, location: Location) {
    super(urlParams, location);
  }

  public static newInstance(
    urlParams: Readonly<Params<string>>,
    location: Location
  ) {
    if (!HttpClient.httpClientInstance) {
      HttpClient.httpClientInstance = new VideoRequest(urlParams, location);
    }
    return HttpClient.httpClientInstance;
  }

  append() {
    this.requests = {
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
          url: "commentThreads",
          params: {
            part: "snippet",
            videoId: this.urlParams.videoId as string,
            maxResults: "10",
          },
        },
        {
          method: Methods.GET,
          url: "search",
          params: {
            relatedToVideoId: this.urlParams.videoId as string,
            part: "id,snippet",
            type: "video",
            maxResults: "5",
          },
        },
      ],
      expectedData: [
        { dataKey: "video" },
        { dataKey: "videoComments" },
        { dataKey: "relatedVideos" },
      ],
    };
  }
}

export default Video;
