import { RouteObject } from "react-router";

import Home, { homeRequests } from "../screens/home/Home";

import { PageLoader } from "../dataBindedComponents";

const ErrorElement = (props: any) => {
  return <p>error</p>;
};

const homeRoutes: ReadonlyArray<RouteObject> = [
  {
    index: true,
    element: (
      <PageLoader
        requests={homeRequests}
        errorElement={ErrorElement}
        successElement={Home}
        loadingElement={<p>loading</p>}
      />
    ),
  },
];

export default homeRoutes;
