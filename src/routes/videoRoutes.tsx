import { RouteObject } from "react-router";

import Video, { VideoRequest } from "../screens/video/Video";
import VideoLoading from "../screens/video/VideoLoading";

import { PageLoader } from "../dataBindedComponents";

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
