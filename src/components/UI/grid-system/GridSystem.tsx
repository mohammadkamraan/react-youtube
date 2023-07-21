import { FC, memo } from "react";

import { IComponentChildren } from "../../../interfaces";

interface IGridSystem extends IComponentChildren {
  columns: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  rows?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: string;
  className?: string;
}

const GridSystem: FC<IGridSystem> = props => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${props.columns}, minmax(0, 1fr))`,
        gridTemplateRows: `	grid-template-rows: repeat(${props.rows}, minmax(0, 1fr))`,
        gap: props.gap || 0,
      }}
      className={props.className}
    >
      {props.children}
    </div>
  );
};

export default memo(GridSystem);
