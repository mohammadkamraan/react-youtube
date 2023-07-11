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
  domKey,
}) => {
  return (
    <>
      {list.map((item, index) => (
        <Component
          key={domKey ? item[domKey] : index}
          {...{ [itemKey]: item, ...componentProps }}
        />
      ))}
    </>
  );
};

export default memo(List);
