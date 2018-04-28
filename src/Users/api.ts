import { client } from '../utils/fetch';

type UserResponse = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type IndexResponse = UserResponse[];
export const index = async () => client<IndexResponse>('GET', '/users');

type ShowResponse = UserResponse;
export const show = async (id: number) =>
  client<ShowResponse>('GET', `/users/${id}`);