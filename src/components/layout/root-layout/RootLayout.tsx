import { FC, memo } from "react";

import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";

import "../../../scss/main.scss";
import Sidebar from "../sidebar/Sidebar";

const RootLayout: FC = () => {
  return (
    <main className='app prevent-default-styling'>
      <Navbar />
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default memo(RootLayout);
