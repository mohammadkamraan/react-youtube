import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../components/layout/root-layout/RootLayout";
import homeRoutes from "./homeRoutes";
import { videoRoutes } from "./videoRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [...homeRoutes, ...videoRoutes],
  },
]);

export default router;
