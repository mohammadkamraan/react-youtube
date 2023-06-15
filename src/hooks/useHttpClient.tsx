import { useState, useEffect } from "react";

import {
  requestHandler,
  IHttpClientOptions,
  requestsHandler,
  IRequestsHandlerParameter,
} from "../utils/httpClient";

const useHttpClient = (
  request?: IHttpClientOptions,
  requests?: IRequestsHandlerParameter
) => {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [data, setData] = useState<null | any>(null);
  const [error, setError] = useState<null | any>(null);

  const loaders = async (requests: IRequestsHandlerParameter) => {
    setLoading(true);
    setError(null);
    setData(null);
    const [data, error] = await requestsHandler(requests);
    setData(data);
    setError(error);
    setLoading(false);
  };

  const loader = async (request: IHttpClientOptions) => {
    setLoading(true);
    setData(null);
    setError(null);
    const [data, error] = await requestHandler(request);
    setData(data);
    setError(error);
    setLoading(false);
  };

  useEffect(() => {
    if (request) {
      loader(request);
    }
    if (requests?.requests.length) {
      loaders(requests);
    }
  }, [request?.url, request?.params, requests?.requests.length]);

  return [loading, data, error, loader, loaders] as const;
};

export default useHttpClient;
