import { FC } from "react";

import { homeRequests } from "./Home";

import { IErrorComponents } from "../../interfaces";
import Text from "../../components/UI/text/Text";

import styles from "./home.module.scss";

const HomeError: FC<IErrorComponents> = ({ error, loader }) => {
  console.log(error);
  return (
    <div className={styles["home-error"]}>
      <div>
        <Text color='white'>
          <p>{error.message}</p>
        </Text>
        <button onClick={() => loader(homeRequests)}>Try again</button>
      </div>
    </div>
  );
};

export default HomeError;
