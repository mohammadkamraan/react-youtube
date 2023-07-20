import { FC } from "react";
import { Methods } from "../../constants/constants";
import { IRequestsHandlerParameter } from "../../utils/httpClient";
import Text from "../../components/UI/text/Text";
import GridSystem from "../../components/UI/grid-system/GridSystem";

import styles from "./home.module.scss";
import VideoCard from "../../components/UI/video-card/VideoCard";

const Home: FC = (props: any) => {
  return (
    <div className={styles["wrapper"]}>
      <GridSystem
        columns={12}
        gap='0.5rem'
        className={styles["videos-wrapper"]}
      >
        {/* <Text color='gray' fontWight='thin'>
          <p>some tess text</p>
        </Text> */}
        <VideoCard
          avatarUrl='https://yt3.ggpht.com/rXzZ5r9s5cRcSldQnDuKq69gnOxUUFR_SZKvYVR70djZw19vTYm0JSt3LWTtuhTgALbujC8Zzw=s88-c-k-c0x00ffffff-no-rj-mo'
          channel='test'
          link='test'
          publishedAt='12'
          title='hello first video'
          videoId='A3FQIn99zFg'
          views={12}
          className={styles["video"]}
        />
      </GridSystem>
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
  ],
  expectedData: [{ dataKey: "posts" }],
};
