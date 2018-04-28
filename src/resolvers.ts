import { mergeResolvers } from 'merge-graphql-schemas';
import { todosResolvers } from './Todos';
import { usersResolvers } from './Users';

export const resolvers = mergeResolvers([todosResolvers, usersResolvers]);
