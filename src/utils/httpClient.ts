import { axiosInstance } from "../API/api";

import { Methods } from "../constants/constants";

export const requestHandler: RequestHandler = async option => {
  let response;
  let requestStatus;
  let errorData;
  try {
    const { data, status } = await axiosInstance(option);
    response = data;
    requestStatus = status;
  } catch (error) {
    errorData = error;
    response = null;
    requestStatus = null;
    throw error;
  }
  return [response, errorData, requestStatus];
};

export const requestsHandler: RequestsHandler = async ({
  requests,
  expectedData,
}) => {
  let data: IRequestsData | null = null;
  let error: any = null;
  try {
    const response = await Promise.all(
      requests.map(request => requestHandler(request))
    );
    data = {};
    for (let index = 0; index < response.length; index++) {
      data[expectedData[index].dataKey] = {
        data: response[index][0],
        statusCode: response[index][2] as number,
      };
    }
  } catch (err) {
    error = err;
  }
  return [data, error];
};

export interface IHttpClientOptions {
  url: string;
  method: Methods;
  data?: any;
  params?: { [key: string]: string };
}

export interface IRequestsHandlerParameter {
  requests: ReadonlyArray<IHttpClientOptions>;
  expectedData: { dataKey: string }[];
}

interface IRequestsData {
  [key: string]: {
    data: any;
    statusCode: number;
  };
}

type RequestHandler = <RequestData>(
  option: IHttpClientOptions
) => Promise<[RequestData, any, number | null]>;

type RequestsHandler = (
  requests: IRequestsHandlerParameter
) => Promise<[IRequestsData | null, any]>;
