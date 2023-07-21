import { ReactElement, ReactNode } from "react";

import type { Loader } from "../hooks/useHttpClient";

// component shared interfaces
export interface IComponentChildren {
  children: ReactNode;
}

// sidebar-options-interfaces
export interface IStaticSidebarOptions {
  option: string;
  link: string;
  appQueries?: { [key: string]: string };
  icon: ReactElement<SVGElement>;
}

export interface IErrorComponents {
  error: Error;
  loader: Loader;
}
