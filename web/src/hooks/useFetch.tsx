import useSWR from "swr";
import api from "../services/api";

export function useFetch<Data = any, Error = any>(uri: string) {
  const { data, error, mutate } = useSWR<Data, Error>(uri, async (uri) => {
    const { data } = await api.get(uri);

    return data;
  });

  return { data, error, mutate };
}
