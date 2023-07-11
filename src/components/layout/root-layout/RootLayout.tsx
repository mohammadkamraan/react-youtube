import { FC, memo } from "react";

import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import GridSystem from "../../UI/grid-system/GridSystem";

import "../../../scss/main.scss";

const RootLayout: FC = () => {
  return (
    <main className='app prevent-default-styling'>
      <Navbar />
      <GridSystem columns={12}>
        <Sidebar />
        <Outlet />
      </GridSystem>
    </main>
  );
};

export default memo(RootLayout);
