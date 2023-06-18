import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./routes/router";

import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
