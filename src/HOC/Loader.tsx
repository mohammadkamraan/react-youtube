import { ReactNode } from "react";

import useHttpClient from "../hooks/useHttpClient";
import usePageTitle from "../hooks/usePageTitle";

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
    const [loading, data, error, loader] = useHttpClient(HttpClient);

    usePageTitle();

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
