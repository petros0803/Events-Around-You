import axios, { AxiosRequestConfig } from "axios";
import config from "config";
import useSWR from "swr";
import { ISWRHookResponse } from "../common/helpers/api.types";

export const httpEvents = axios.create({
  baseURL: config.BE_BASE_URL,
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
  getById: "/events/",
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

export const useGetEventById = (
  index: string | string[],
  config?: any
): ISWRHookResponse<any> => {
  const { data, error } = useSWR(
    `${eventsApiPaths.getById}${index}`,
    getAllEventsApi,
    { ...config }
  );

  return {
    data,
    error,

    isLoading: !data && !error,
  };
};
