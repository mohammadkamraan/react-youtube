import { RouteObject } from "react-router";

import Home, { homeRequests } from "../screens/home/Home";
import HomeLoading from "../screens/home/HomeLoading";
import HomeError from "../screens/home/HomeError";

import { PageLoader } from "../dataBindedComponents";

const homeRoutes: ReadonlyArray<RouteObject> = [
  {
    index: true,
    element: (
      <PageLoader
        requests={homeRequests}
        loadingElement={<HomeLoading />}
        successElement={Home}
        errorElement={HomeError}
      />
    ),
  },
];

export default homeRoutes;
