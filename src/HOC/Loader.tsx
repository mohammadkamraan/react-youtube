import { ReactNode } from "react";

import useHttpClient from "../hooks/useHttpClient";

import { IRequestsHandlerParameter } from "../utils/httpClient";

interface ILoaderComponent {
  requests: IRequestsHandlerParameter;
  errorElement: any;
  successElement: any;
  loadingElement: ReactNode;
}

const Loader =
  (Component: any) =>
  ({
    requests,
    successElement: SuccessElement,
    errorElement: ErrorElement,
    loadingElement,
  }: ILoaderComponent) => {
    const [loading, data, error, loader] = useHttpClient(requests);

    return (
      <Component
        data={data}
        error={error}
        loading={loading}
        successElement={<SuccessElement {...data} loader={loader} />}
        errorElement={<ErrorElement error={error} loader={loader} />}
        loadingElement={loadingElement}
      />
    );
  };

export default Loader;
