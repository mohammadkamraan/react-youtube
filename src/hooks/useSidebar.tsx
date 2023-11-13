import { useState } from "react";
import { Sidebars } from "../constants/constants";

const useSidebar = () => {
  const [sidebar, setSidebar] = useState<Sidebars>(Sidebars.HOME_SIDEBAR);
};

export default useSidebar;
