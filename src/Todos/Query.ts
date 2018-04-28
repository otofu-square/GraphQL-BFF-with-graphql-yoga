import { Todo } from './types';
import { api as todosApi } from './api';
import { usersApi } from '../Users';

type TodosQuery = () => Promise<Todo[]>;
const todosQuery: TodosQuery = async () => {
  const todos = await todosApi.index();
  return Promise.all(
    todos.map(async ({ id, title, completed, userId }) => {
      const user = await usersApi.show(userId);
      return {
        id,
        title,
        completed,
        user,
      };
    }),
  );
};

type TodoQuery = (a1: any, a2: { id: number }) => Promise<Todo>;
const todoQuery: TodoQuery = async (_, { id }) => {
  const { title, completed, userId } = await todosApi.show(id);
  const user = await usersApi.show(userId);
  return {
    id,
    title,
    completed,
    user,
  };
};

export const Query = {
  todo: todoQuery,
  todos: todosQuery,
};
