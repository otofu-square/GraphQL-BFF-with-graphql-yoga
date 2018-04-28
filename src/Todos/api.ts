import { client } from '../utils/fetch';

type TodoResponse = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

type IndexResponse = TodoResponse[];
const index = async () => client<IndexResponse>('GET', '/todos');

type ShowResponse = TodoResponse;
const show = async (id: number) => client<ShowResponse>('GET', `/todos/${id}`);

export const api = {
  index,
  show,
};
