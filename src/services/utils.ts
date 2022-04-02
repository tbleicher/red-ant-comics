import { API_SECRETS } from "./apiSecrets";

export type QueryOptions = Record<string, string | number | boolean>;

/**
 * This function converts a QueryOptions object into a query string
 * and injects the required API key.
 *
 * @returns string
 */
export function convertToQueryString(options: QueryOptions): string {
  const _options = {
    ...API_SECRETS,
    ...options,
  } as QueryOptions;

  const queryParams = new URLSearchParams();

  Object.keys(_options).forEach((key) => {
    queryParams.append(key, `${_options[key]}`);
  });

  return queryParams.toString();
}
