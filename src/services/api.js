import { baseApi } from "../constants";

export function getData(url) {
  return apiCall(url, "GET");
}

export function postData(url, options) {
  return apiCall(url, "POST", options);
}

function apiCall(url: string, method: string, options?: any) {
  const uri = baseApi + url;
  return fetch(uri, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: options ? JSON.stringify(options) : null
  });
}
