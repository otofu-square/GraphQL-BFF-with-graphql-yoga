import { User } from './types';
import { api } from './api';

type UserQuery = (a1: any, a2: { id: number }) => Promise<User>;
const userQuery: UserQuery = async (_, { id }) => {
  const user = await api.show(id);
  return { ...user };
};

type UsersQuery = () => Promise<User[]>;
const usersQuery: UsersQuery = async () => {
  const users = await api.index();
  return [...users];
};

export const Query = {
  user: userQuery,
  users: usersQuery,
};
