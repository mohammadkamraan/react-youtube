import { FC, memo } from "react";

import { Outlet, useLocation, useParams } from "react-router";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import GridSystem from "../../UI/grid-system/GridSystem";

import { urlsThatRenderHomeSidebar } from "../../../constants/constants";

import "../../../scss/main.scss";
import ConditionalRender from "../../dom/conditional-render/ConditionalRender";
import HomeSidebar from "../sidebar/home-sidebar/HomeSidebar";

const RootLayout: FC = () => {
  const location = useLocation();

  return (
    <main className='app prevent-default-styling'>
      <Navbar />
      <GridSystem columns={12}>
        <ConditionalRender condition={urlsThatRenderHomeSidebar.has(location.pathname)}>
          <HomeSidebar />
        </ConditionalRender>
        <ConditionalRender condition={!urlsThatRenderHomeSidebar.has(location.pathname)}>
          <Sidebar />
        </ConditionalRender>
        <Outlet />
      </GridSystem>
    </main>
  );
};

export default memo(RootLayout);
