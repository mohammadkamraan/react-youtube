import { FC } from "react";
import { Methods } from "../../constants/constants";
import { HttpClient } from "../../utils/httpClient";
import GridSystem from "../../components/UI/grid-system/GridSystem";

import styles from "./home.module.scss";
import VideoCard from "../../components/UI/video-card/VideoCard";
import ControlledList from "../../components/dom/controlled-list/ControlledList";
import { Location, Params } from "react-router";

const Home: FC = (props: any) => {
  return (
    <div className={styles["wrapper"]}>
      <GridSystem columns={12} gap='1rem' className={styles["videos-wrapper"]}>
        <ControlledList
          list={props.videos.data.items}
          renderer={item => (
            <VideoCard
              key={item.id.videoId}
              videoId={item.id.videoId}
              avatarUrl='https://yt3.ggpht.com/rXzZ5r9s5cRcSldQnDuKq69gnOxUUFR_SZKvYVR70djZw19vTYm0JSt3LWTtuhTgALbujC8Zzw=s88-c-k-c0x00ffffff-no-rj-mo'
              channel={item.snippet.channelTitle}
              link='test'
              previewImage=''
              publishedAt={item.snippet.publishTime}
              title={item.snippet.title}
              views={20}
            />
          )}
        />
      </GridSystem>
      <button onClick={() => props.loader(HomeRequests)}>load</button>
    </div>
  );
};

export default Home;

export class HomeRequests extends HttpClient {
  constructor(urlParams: Readonly<Params<string>>, location: Location) {
    super(urlParams, location);
  }

  public static newInstance(
    urlParams: Readonly<Params<string>>,
    location: Location
  ) {
    if (!HttpClient.httpClientInstance) {
      HttpClient.httpClientInstance = new HomeRequests(urlParams, location);
    }
    return HttpClient.httpClientInstance;
  }

  append(): void {
    this.requests = {
      requests: [
        {
          method: Methods.GET,
          url: "/search",
          params: {
            q: "new",
            part: "snippet,id",
            regionCode: "US",
            maxResults: "20",
            order: "date",
          },
        },
      ],
      expectedData: [{ dataKey: "videos" }],
    };
  }
}
