import { ReactNode } from "react";

import useHttpClient from "../hooks/useHttpClient";

import {
  IHttpClientOptions,
  IRequestsHandlerParameter,
} from "../utils/httpClient";

interface ILoaderComponent {
  request?: IHttpClientOptions;
  requests?: IRequestsHandlerParameter;
  errorElement: any;
  successElement: any;
  loadingElement: ReactNode;
}

const Loader =
  (Component: any) =>
  ({
    request,
    requests,
    successElement: SuccessElement,
    errorElement: ErrorElement,
    loadingElement,
  }: ILoaderComponent) => {
    const [loading, data, error, loader, loaders] = useHttpClient(
      request,
      requests
    );

    return (
      <Component
        data={data}
        error={error}
        loading={loading}
        successElement={
          <SuccessElement data={data} loader={loader} loaders={loaders} />
        }
        errorElement={
          <ErrorElement error={error} loader={loader} loaders={loaders} />
        }
        loadingElement={loadingElement}
      />
    );
  };

export default Loader;
