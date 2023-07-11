import { FC, memo, ReactNode } from "react";

interface IConditionalRender {
  condition: boolean;
  trueComponent: ReactNode;
  falseComponent?: ReactNode;
}

const ConditionalRender = ({
  condition,
  trueComponent,
  falseComponent,
}: IConditionalRender) => {
  if (condition) {
    return trueComponent;
  } else if (falseComponent) {
    return falseComponent;
  } else {
    return null;
  }
};

export default memo(ConditionalRender as FC<IConditionalRender>);
