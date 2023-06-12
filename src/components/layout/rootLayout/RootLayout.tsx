import { FC } from "react";

import { Outlet } from "react-router";

const RootLayout: FC = () => {
  return (
    <main>
      <nav>hello</nav>
      <Outlet />
    </main>
  );
};

export default RootLayout;
