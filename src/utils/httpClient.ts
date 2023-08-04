import { Location, Params } from "react-router";
import { axiosInstance } from "../API/api";

import { Methods } from "../constants/constants";

export type IHttpClientOptions = {
  url: string;
  method: Methods;
  data?: any;
  params?: { [key: string]: string };
};

export type IRequestsHandlerParameter = {
  requests: ReadonlyArray<IHttpClientOptions>;
  expectedData: { dataKey: string }[];
};

interface IRequestsData {
  [key: string]: {
    data: any;
    statusCode: number;
  };
}

export class HttpClient {
  private _urlParams!: Readonly<Params<string>>;
  private _location!: Location;
  private _requests!: IRequestsHandlerParameter;

  constructor(urlParams: Readonly<Params<string>>, location: Location) {
    this._urlParams = urlParams;
    this._location = location;
  }

  get urlParams() {
    return this._urlParams;
  }

  get location() {
    return this._location;
  }

  get requests() {
    return this._requests;
  }

  set requests(requests: IRequestsHandlerParameter) {
    this._requests = requests;
  }

  public async requestsHandler() {
    let data: IRequestsData | null = null;
    let error: any = null;
    try {
      const response = await Promise.all(
        this.requests.requests.map(request => this.requestHandler(request))
      );
      data = {};
      for (let index = 0; index < response.length; index++) {
        data[this.requests.expectedData[index].dataKey] = {
          data: response[index][0],
          statusCode: response[index][2] as number,
        };
      }
    } catch (err) {
      error = err;
    }
    return [data, error];
  }

  private async requestHandler(option: IHttpClientOptions) {
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
  }

  append() {
    return;
  }
}
