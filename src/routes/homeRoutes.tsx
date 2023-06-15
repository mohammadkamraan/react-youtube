import { RouteObject } from "react-router";

import Home from "../screens/home/Home";

const homeRoutes: ReadonlyArray<RouteObject> = [
  {
    index: true,
    element: <Home />,
  },
];

export default homeRoutes;
