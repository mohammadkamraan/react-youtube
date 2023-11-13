import { FC } from "react";

import Player from "react-player/youtube";
import { Link } from "react-router-dom";
import FormattedText from "../../formatted-text/FormattedText";
import Text from "../../text/Text";

import usePageTitle from "../../../../hooks/usePageTitle";

import styles from "./related-videos-card.module.scss";

type RelatedVideosCardProps = {
  link: string;
  title: string;
  channelName: string;
  videoViews: number;
  publishedAt: string;
  videoUrl: string;
};

const RelatedVideosCard: FC<RelatedVideosCardProps> = props => {
  const { createPageTitleQuery } = usePageTitle();

  console.log(props);

  return (
    <Link
      to={{
        pathname: props.link,
        search: createPageTitleQuery(props.title),
      }}
      className={styles["wrapper"]}
      relative='route'
    >
      <Player
        width='12rem'
        height='6rem'
        url={props.videoUrl}
        controls={false}
        playIcon={<></>}
        light
      />
      <div>
        <FormattedText>
          <Text>
            <p>{props.title}</p>
          </Text>
        </FormattedText>
        <Text color='gray' fontSize='0.9rem' fontWight='thin'>
          <p>{props.channelName}</p>
        </Text>
        <div className={styles["video-detail"]}>
          <Text color='gray' fontWight='thin' fontSize='0.9rem'>
            <p>{props.videoViews} views</p>
          </Text>
          <Text color='gray' fontSize='0.9rem' fontWight='thin'>
            <p>{props.publishedAt}</p>
          </Text>
        </div>
      </div>
    </Link>
  );
};

export default RelatedVideosCard;
