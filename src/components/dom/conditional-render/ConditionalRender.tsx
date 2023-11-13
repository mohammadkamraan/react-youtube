import { FC, memo, ReactNode } from "react";
import { IComponentChildren } from "../../../interfaces";

interface IConditionalRender extends IComponentChildren {
  condition: boolean;
}

const ConditionalRender = ({ condition, children }: IConditionalRender) => {
  if (condition) {
    return children;
  } else {
    null;
  }
};

export default memo(ConditionalRender as FC<IConditionalRender>);
