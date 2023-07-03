import { ComponentType, FC, memo, ReactNode } from "react";

interface IDisplay {
  successElement: ReactNode;
  errorElement: ReactNode;
  loadingElement: ReactNode;
  loading: boolean;
  error: ComponentType;
  data: ComponentType;
}

const Display = ({
  data,
  error,
  loading,
  errorElement,
  successElement,
  loadingElement,
}: IDisplay) => {
  if (loading) return loadingElement;
  else if (error && !loading) return errorElement;
  else if (data && !loading) return successElement;
  else return null;
};

export default memo(Display as FC);
