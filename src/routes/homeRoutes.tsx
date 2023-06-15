import { RouteObject } from "react-router";

import { homeRequests } from "../screens/home/Home";

import { HomeLoader } from "../dataBindedComponents";

const homeRoutes: ReadonlyArray<RouteObject> = [
  {
    index: true,
    element: (
      <HomeLoader
        requests={homeRequests}
        errorElement={<p>error</p>}
        successElement={<>test</>}
      />
    ),
  },
];

export default homeRoutes;
