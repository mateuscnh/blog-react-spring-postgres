import useSWR from "swr";
import { base_url } from "../services/api";

export function useFetch<Data = any, Error = any>(uri: string) {
  const { data, error, mutate } = useSWR<Data, Error>(
    base_url + uri,
    async (url) => {
      const response = await fetch(url).then((res) => res.json());

      return response;
    }
  );

  return { data, error, mutate };
}
