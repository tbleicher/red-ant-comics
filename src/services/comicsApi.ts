import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ComicsListItem } from "./types";
import { convertToQueryString } from "./utils";

type ListQueryOptions = {
  limit: number;
  noVariants: boolean;
  offset: number;
  orderBy?: "title" | "-title";
};

const DEFAULT_LIST_OPTIONS: ListQueryOptions = {
  limit: 100,
  noVariants: true,
  offset: 0,
  // orderBy: "title",
};

type ComicsListDataContainer = {
  count: number;
  limit: number;
  offset: number;
  results: ComicsListItem[];
  total: number;
};

type ComicsListDataWrapper = {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: ComicsListDataContainer;
  etag: string;
  status: "OK" | "ERROR";
};

// Define a service using a base URL and expected endpoints
export const comicsApi = createApi({
  reducerPath: "comicsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://gateway.marvel.com/v1/public/" }),
  endpoints: (builder) => ({
    listComics: builder.query<ComicsListDataWrapper, Partial<ListQueryOptions> | undefined>({
      query: (options = {}) => {
        const queryOptions = { ...DEFAULT_LIST_OPTIONS, ...options };
        const queryString = convertToQueryString(queryOptions);

        return `comics?${queryString}`;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useListComicsQuery } = comicsApi;
