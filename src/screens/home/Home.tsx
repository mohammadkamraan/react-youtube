import { FC } from "react";
import { Methods } from "../../constants/constants";
import { HttpClient } from "../../utils/httpClient";
import GridSystem from "../../components/UI/grid-system/GridSystem";

import { AVATAR_URL } from "../../constants/constants";

import styles from "./home.module.scss";
import VideoCard from "../../components/UI/video-card/VideoCard";
import ControlledList from "../../components/dom/controlled-list/ControlledList";

const Home: FC = (props: any) => {
  console.log(props);
  return (
    <div className={styles["wrapper"]}>
      <GridSystem columns={12} gap='1rem' className={styles["videos-wrapper"]}>
        <ControlledList
          list={props.videos.data.items}
          renderer={item => (
            <VideoCard
              key={item.id}
              videoId={item.id}
              avatarUrl={AVATAR_URL}
              channel={item.snippet.channelTitle}
              link={"watch/" + item.id + "/" + item.snippet.categoryId}
              previewImage=''
              publishedAt={item.snippet.publishedAt}
              title={item.snippet.title}
              views={20}
            />
          )}
        />
      </GridSystem>
    </div>
  );
};

export default Home;

export class HomeRequests extends HttpClient {
  append() {
    return {
      requests: [
        {
          method: Methods.GET,
          url: "/videos",
          params: {
            q: "new",
            part: "snippet,id",
            regionCode: "US",
            maxResults: "1",
            order: "date",
            chart: "mostPopular",
          },
        },
      ],
      expectedData: [{ dataKey: "videos" }],
    };
  }
}
