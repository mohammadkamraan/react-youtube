import { FC, memo, ReactElement } from "react";

interface IControlledList {
  list: any[] | ReadonlyArray<any>;
  renderer: (item: any, index: number) => ReactElement;
}

const ControlledList: FC<IControlledList> = ({ renderer, list }) => {
  return <>{list.map(renderer)}</>;
};

export default memo(ControlledList);
