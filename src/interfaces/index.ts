import { ReactNode } from "react";

// component shared interfaces
export interface IComponentChildren {
  children: ReactNode;
}

// sidebar-options-interfaces
export interface IStaticSidebarOptions {
  option: string;
  link: string;
  appQueries?: { [key: string]: string };
  icon: HTMLElement;
}
