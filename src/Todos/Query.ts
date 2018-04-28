import { Todo } from './types';

type TodosQuery = (a1: any, a2: { id: string }) => Todo;
const todosQuery: TodosQuery = (_, { id }) => ({
  id: 1,
  title: 'test',
  completed: false,
  user: {
    id: 1,
    name: 'hoge',
    username: 'fuga',
    email: 'hoge@gmail.com',
  },
});

type TodoQuery = () => Todo[];
const todoQuery: TodoQuery = () => [
  {
    id: 1,
    title: 'test',
    completed: false,
    user: {
      id: 1,
      name: 'hoge',
      username: 'fuga',
      email: 'hoge@gmail.com',
    },
  },
];

export const Query = {
  todo: todoQuery,
  todos: todosQuery,
};
