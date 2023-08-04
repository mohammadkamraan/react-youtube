import { AxiosError } from "axios";
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
  public static httpClientInstance: null | HttpClient;
  private _urlParams!: Readonly<Params<string>>;
  private _location!: Location;
  private _requests!: IRequestsHandlerParameter;
  private _data: any = null;
  private _error: AxiosError | null = null;

  protected constructor(
    urlParams: Readonly<Params<string>>,
    location: Location
  ) {
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

  get data() {
    return this._data;
  }

  set data(data) {
    this._data = data;
  }

  get error() {
    return this._error;
  }

  set error(error) {
    this._error = error;
  }

  public static newInstance(
    urlParams: Readonly<Params<string>>,
    location: Location
  ) {
    if (!HttpClient.httpClientInstance) {
      HttpClient.httpClientInstance = new HttpClient(urlParams, location);
    }
    return HttpClient.httpClientInstance;
  }

  public async requestsHandler() {
    let data: IRequestsData | null = null;
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
      this.error = err as AxiosError;
    }
    this.data = data;
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
