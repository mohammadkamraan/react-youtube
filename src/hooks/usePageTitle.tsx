import { useLayoutEffect } from "react";
import { createSearchParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { NullAble } from "../constants/constants";

const usePageTitle = () => {
  const [searchParams] = useSearchParams();
  const pageTitle = searchParams.get("pageTitle");

  const setTitle = (title: NullAble<string>) => {
    if (title) document.title = title;
  };

  const createPageTitleQuery = (pageTitle: string) => {
    if (!pageTitle) return;
    return createSearchParams({ pageTitle }).toString();
  };

  useLayoutEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle]);

  return { createPageTitleQuery } as const;
};

export default usePageTitle;
