import fetch from 'node-fetch';

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

const HOST = 'https://jsonplaceholder.typicode.com';

export const client = async <T>(method: Method, path: string) => {
  const response = await fetch(`${HOST}${path}`, { method });
  const json = await response.json<T>();
  return json;
};
