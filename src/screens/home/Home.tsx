import { FC } from "react";
import { Methods } from "../../constants/constants";
import { IRequestsHandlerParameter } from "../../utils/httpClient";

import classes from "./home.module.scss";

const Home: FC = (props: any) => {
  return <div>home page</div>;
};

export default Home;

export const homeRequests: IRequestsHandlerParameter = {
  requests: [
    {
      method: Methods.GET,
      url: "https://jsonplaceholder.typicode.com/posts",
    },
  ],
  expectedData: [{ dataKey: "posts" }],
};
