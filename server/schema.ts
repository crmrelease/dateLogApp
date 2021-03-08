import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import {loadFilesSync} from '@graphql-tools/load-files'
import path from 'path';

const allTypes = loadFilesSync(path.join(__dirname, "./api/**/*.graphql"));
const allResolvers = loadFilesSync(path.join(__dirname, "./api/**/*.resolvers.*"));
const schema = makeExecutableSchema({
  // allTypes를 한 개의 문자열로 통합
  typeDefs: mergeTypeDefs(allTypes),
  // allResolvers를 한 개의 자바스크립트 코드로 통합
  resolvers: mergeResolvers(allResolvers)
});

export default schema;
