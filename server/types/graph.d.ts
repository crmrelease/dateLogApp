export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Test = {
  __typename?: 'Test';
  test: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  sayHello?: Maybe<Test>;
};

export type Mutation = {
  __typename?: 'Mutation';
  doTest?: Maybe<Test>;
};


export type MutationDoTestArgs = {
  testInput?: Maybe<Scalars['String']>;
};
