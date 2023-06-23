import { FC, memo } from "react";

interface IListProps {
  component: FC;
  list: any[];
  itemKey: string;
  componentProps?: { [key: string]: any };
  domKey?: string;
}

const List: FC<IListProps> = ({
  component: Component,
  list,
  itemKey,
  componentProps,
  domKey = "id",
}) => {
  return (
    <>
      {list.map(item => (
        <Component
          key={item[domKey]}
          {...{ [itemKey]: item, ...componentProps }}
        />
      ))}
    </>
  );
};

export default memo(List);
