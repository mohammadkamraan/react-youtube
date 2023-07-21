import { useState, useEffect, useMemo } from "react";

import {
  requestsHandler,
  IRequestsHandlerParameter,
} from "../utils/httpClient";

export type Loader = (parameter: IRequestsHandlerParameter) => Promise<void>;

const useHttpClient = (requests: IRequestsHandlerParameter) => {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [data, setData] = useState<null | any>(null);
  const [error, setError] = useState<null | any>(null);

  const stringifiedRequests: string = useMemo(
    () => JSON.stringify(requests),
    [JSON.stringify(requests)]
  );

  const loader: Loader = async (requests: IRequestsHandlerParameter) => {
    setLoading(true);
    setError(null);
    setData(null);
    const [data, error] = await requestsHandler(requests);
    setData(data);
    setError(error);
    setLoading(false);
  };

  useEffect(() => {
    loader(requests);
  }, [stringifiedRequests]);

  return [loading, data, error, loader] as const;
};

export default useHttpClient;
