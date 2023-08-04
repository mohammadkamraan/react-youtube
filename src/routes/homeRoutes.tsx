import { RouteObject } from "react-router";

import Home, { HomeRequests } from "../screens/home/Home";
import HomeLoading from "../screens/home/HomeLoading";
import HomeError from "../screens/home/HomeError";

import { PageLoader } from "../dataBindedComponents";

const homeRoutes: ReadonlyArray<RouteObject> = [
  {
    index: true,
    element: (
      <PageLoader
        HttpClient={HomeRequests}
        loadingElement={<HomeLoading />}
        successElement={Home}
        errorElement={HomeError}
      />
    ),
  },
];

export default homeRoutes;
