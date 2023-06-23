import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../components/layout/root-layout/RootLayout";
import homeRoutes from "./homeRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [...homeRoutes],
  },
]);

export default router;
