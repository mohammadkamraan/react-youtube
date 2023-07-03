import { FC, memo } from "react";

import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";

import "../../../scss/main.scss";

const RootLayout: FC = () => {
  return (
    <main className='app prevent-default-styling'>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default memo(RootLayout);
