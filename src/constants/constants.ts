export enum Methods {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
}

export const API_KEY = "AIzaSyBvTgA7SCawGQ0MiWHl4kwLhaSGYcMF640";

export const VIDEOS_BASE_URL = "https://www.youtube.com/watch?v=";

export type NullAble<T> = T | null;

export const AVATAR_URL =
  "https://yt3.ggpht.com/rXzZ5r9s5cRcSldQnDuKq69gnOxUUFR_SZKvYVR70djZw19vTYm0JSt3LWTtuhTgALbujC8Zzw=s88-c-k-c0x00ffffff-no-rj-mo";

export const urlsThatRenderHomeSidebar = new Set<string>("/");

export enum Sidebars {
  HOME_SIDEBAR = "home-sidebar",
  GENERIC_SIDEBAR = "generic-sidebar",
}
