import { RouteObject } from "react-router";

import Video, { VideoRequest } from "../screens/video/video";
import VideoLoading from "../screens/video/videoLoading";

import { PageLoader } from "../dataBindedComponents";
import HomeError from "../screens/home/HomeError";

export const videoRoutes: ReadonlyArray<RouteObject> = [
  {
    path: "watch/:videoId/:categoryId",
    element: (
      <PageLoader
        successElement={Video}
        errorElement={Video}
        loadingElement={<VideoLoading />}
        HttpClient={VideoRequest}
      />
    ),
  },
];
