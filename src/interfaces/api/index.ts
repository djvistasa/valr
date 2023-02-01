import { AxiosRequestConfig } from 'axios';

interface IApiCall extends AxiosRequestConfig {
  callBack?: () => void;
}

interface IApiResponse {
  ok: boolean;
  result: any;
  error: Error | undefined;
}

export type { IApiResponse, IApiCall };
