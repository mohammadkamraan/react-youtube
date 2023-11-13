import { AxiosError } from "axios";
import { Location, Params } from "react-router";
import { axiosInstance } from "../API/api";

import { Methods } from "../constants/constants";

export type IHttpClientOptions = {
  url: string;
  method: Methods;
  data?: any;
  params?: { [key: string]: string | number | boolean };
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

export abstract class HttpClient {
  private _urlParams!: Readonly<Params<string>>;
  private _location!: Location;
  private _requests!: IRequestsHandlerParameter;
  private _data: any = null;
  private _error: AxiosError | null = null;

  get urlParams() {
    return this._urlParams;
  }

  set urlParams(value: Readonly<Params<string>>) {
    this._urlParams = value;
  }

  get location() {
    return this._location;
  }

  set location(value: Location) {
    this._location = value;
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

  public async requestsHandler() {
    let data: IRequestsData | null = null;
    this.requests = this.append();
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

  abstract append(): IRequestsHandlerParameter;
}
