import axios, { AxiosRequestConfig } from "axios";
import useSWR from "swr";
import { ISWRHookResponse } from "../common/helpers/api.types";

export const httpEvents = axios.create({
  baseURL: "http://localhost:3001",
  responseType: "json",
});

const authMiddleware = (
  config: AxiosRequestConfig<any>
): AxiosRequestConfig<any> => {
  const token = null;
  if (config?.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

httpEvents.interceptors.request.use(authMiddleware);

export const eventsApiPaths = {
  all: "/events",
};

export const getAllEventsApi = async (path: string): Promise<any> => {
  const { data } = await httpEvents.get(path || eventsApiPaths.all);
  return data;
};

export const useAllEvents = (config?: any): ISWRHookResponse<any> => {
  const { data, error } = useSWR(eventsApiPaths.all, getAllEventsApi, {
    shouldRetryOnError: false,
    ...config,
  });

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
