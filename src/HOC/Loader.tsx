import { ReactNode } from "react";

import useHttpClient from "../hooks/useHttpClient";

interface ILoaderComponent {
  HttpClient: any;
  errorElement: any;
  successElement: any;
  loadingElement: ReactNode;
}

const Loader =
  (Component: any) =>
  ({
    HttpClient,
    successElement: SuccessElement,
    errorElement: ErrorElement,
    loadingElement,
  }: ILoaderComponent) => {
    const [loading, data, error, loader, instance] = useHttpClient(HttpClient);

    return (
      <Component
        data={data}
        error={error}
        loading={loading}
        successElement={
          <SuccessElement {...data} loader={loader} instance={instance} />
        }
        errorElement={<ErrorElement error={error} loader={loader} />}
        loadingElement={loadingElement}
      />
    );
  };

export default Loader;
