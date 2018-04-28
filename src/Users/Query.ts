import { User } from './types';

type UserQuery = () => User;
const userQuery: UserQuery = () => ({
  id: 1,
  name: 'hoge',
  username: 'fuga',
  email: 'hoge@gmail.com',
});

type UsersQuery = (a1: any, a2: { id: string }) => User[];
const usersQuery: UsersQuery = (_, { id }) => [
  {
    id: 1,
    name: 'hoge',
    username: 'fuga',
    email: 'hoge@gmail.com',
  },
];

export const Query = {
  user: userQuery,
  users: usersQuery,
};
