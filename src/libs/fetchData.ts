export async function fetchData<T = unknown>(
  url: string,
  options: {
    method: "GET" | "POST" | "PUT" | "DELETE";
    headers?: HeadersInit;
    cache?: RequestCache;
  },
) {
  const _apiEndpoint = `${import.meta.env.VITE_API_ENDPOINT}`;
  const _requestHeader: Headers = new Headers(options.headers);

  const _response = await fetch(`${_apiEndpoint}${url}`, {
    method: options.method,
    headers: _requestHeader,
    cache: options.cache,
  });

  return (await _response.json()) as Promise<T>;
}

export async function fetchDataWithAuth<T = unknown>(
  url: string,
  options: {
    method: "GET" | "POST" | "PUT" | "DELETE";
    headers?: HeadersInit;
    cache?: RequestCache;
  },
) {
  const _apiEndpoint = `${import.meta.env.VITE_API_ENDPOINT}`;
  const _requestHeader: Headers = new Headers(options.headers);
  const _token = localStorage.getItem("token");
  if (_token) {
    _requestHeader.set("Authorization", `Bearer ${_token}`);
  }

  const _response = await fetch(`${_apiEndpoint}${url}`, {
    method: options.method,
    headers: _requestHeader,
    cache: options.cache,
  });

  return (await _response.json()) as Promise<T>;
}
