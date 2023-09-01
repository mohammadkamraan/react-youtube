import { FC } from "react";
import { VIDEOS_BASE_URL } from "../../../constants/constants";
import ControlledList from "../../dom/controlled-list/ControlledList";
import RelatedVideosCard from "./related-videos-card/RelatedVideosCard";

import styles from "./related-videos.module.scss";

type RelatedVideosProps = {
  relatedVideos: any;
};

const RelatedVideos: FC<RelatedVideosProps> = ({ relatedVideos }) => {
  console.log(relatedVideos);
  return (
    <aside className={styles["wrapper"]}>
      <ControlledList
        list={relatedVideos.items}
        renderer={video => (
          <RelatedVideosCard
            key={video.id.videoId}
            videoUrl={VIDEOS_BASE_URL + "G0m_uNaSres"}
            channelName={video.snippet.channelTitle}
            publishedAt={video.snippet.publishedAt}
            link={"/watch/" + video.id.videoId + "/" + "20"}
            title={video.snippet.channelTitle}
            videoViews={20}
          />
        )}
      />
    </aside>
  );
};

export default RelatedVideos;
