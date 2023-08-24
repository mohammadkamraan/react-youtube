import { useState, useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router";

import { HttpClient } from "../utils/httpClient";

export type Loader = (parameter: any) => Promise<void>;

const useHttpClient = (HttpService: HttpClient) => {
  const location = useLocation();
  const params = useParams();
  const [loading, setLoading] = useState<boolean | null>(null);
  const [data, setData] = useState<null | any>(null);
  const [error, setError] = useState<null | any>(null);

  const stringifiedHttpClient: string = useMemo(
    () => JSON.stringify(HttpClient),
    [JSON.stringify(HttpClient)]
  );

  const loader: Loader = async Http => {
    const httpClient: HttpClient = new Http();
    httpClient.urlParams = params;
    httpClient.location = location;
    setLoading(true);
    await httpClient.requestsHandler();
    setData(httpClient.data);
    setError(httpClient.error);
    setLoading(false);
  };

  useEffect(() => {
    loader(HttpService);
  }, [stringifiedHttpClient]);

  return [loading, data, error, loader] as const;
};

export default useHttpClient;
