import { useState, useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router";

import { HttpClient } from "../utils/httpClient";

export type Loader = (parameter: any) => Promise<void>;

const useHttpClient = (HttpClient: HttpClient) => {
  const location = useLocation();
  const params = useParams();
  const [loading, setLoading] = useState<boolean | null>(null);
  const [data, setData] = useState<null | any>(null);
  const [error, setError] = useState<null | any>(null);
  const [instance, setInstance] = useState<any>(null);

  const stringifiedHttpClient: string = useMemo(
    () => JSON.stringify(HttpClient),
    [JSON.stringify(HttpClient)]
  );

  const loader: Loader = async HttpClient => {
    const httpClient: HttpClient = new HttpClient(params, location);
    httpClient.append();
    setLoading(true);
    setError(null);
    setData(null);
    const [data, error] = await httpClient.requestsHandler();
    setData(data);
    setError(error);
    setLoading(false);
    setInstance(httpClient);
  };

  useEffect(() => {
    loader(HttpClient);
  }, [stringifiedHttpClient]);

  return [loading, data, error, loader, instance] as const;
};

export default useHttpClient;
