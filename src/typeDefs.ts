import * as path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

const typesArray = fileLoader(path.join(__dirname, '**/typeDefs.graphql'));

export const typeDefs = mergeTypes(typesArray, { all: true });
