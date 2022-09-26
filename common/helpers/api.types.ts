import { KeyedMutator } from "swr";

export interface ISWRHookResponse<T> {
  data: T;
  error: any;
  isLoading: boolean;
  mutate?: KeyedMutator<T>;
}
