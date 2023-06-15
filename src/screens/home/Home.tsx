import { FC } from "react";
import { Methods } from "../../constants/constants";
import { IRequestsHandlerParameter } from "../../utils/httpClient";

const Home: FC = (props: any) => {
  console.log(props);
  return <div>home page</div>;
};

export default Home;

export const homeRequests: IRequestsHandlerParameter = {
  requests: [
    { method: Methods.GET, url: "https://jsonplaceholder.typicode.com/posts" },
    { method: Methods.GET, url: "https://jsonplaceholder.typicode.com/photos" },
  ],
  expectedData: [{ dataKey: "posts" }, { dataKey: "photos" }],
};
