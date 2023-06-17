import { FC } from "react";
import { Methods } from "../../constants/constants";
import { IRequestsHandlerParameter } from "../../utils/httpClient";

import classes from "./home.module.scss";

const Home: FC = (props: any) => {
  console.log(props);
  return (
    <div className={classes["flex-style"]}>
      <p className={classes["world"]}>hello</p>
      <p>world!</p>
    </div>
  );
};

export default Home;

export const homeRequests: IRequestsHandlerParameter = {
  requests: [
    {
      method: Methods.GET,
      url: "https://jsonplaceholder.typicode.com/posts",
    },
    { method: Methods.GET, url: "https://jsonplaceholder.typicode.com/photos" },
  ],
  expectedData: [{ dataKey: "posts" }, { dataKey: "photos" }],
};
