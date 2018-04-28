import { client } from '../utils/fetch';
import { User } from './types';

type UserResponse = User;

type IndexResponse = UserResponse[];
const index = async () => client<IndexResponse>('GET', '/users');

type ShowResponse = UserResponse;
const show = async (id: number) => client<ShowResponse>('GET', `/users/${id}`);

export const api = {
  index,
  show,
};
