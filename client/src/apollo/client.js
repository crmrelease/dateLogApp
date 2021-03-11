import { ApolloClient, ApolloLink } from "@apollo/client";
import cache from "./cache";
import { link } from "./link";
// ApolloClient is an encapsulation of ApolloLink, ApolloCache... instances

const client = new ApolloClient({
  // Provide required constructor fields
  cache,
  link,
  queryDeduplication: false,
  defaultOptions: {
    // 공식문서
    // https://www.apollographql.com/docs/react/api/core/ApolloClient/#example-defaultoptions-object
    // <useQuery> hook uses watchQuery function

    // fetchPolicy 설명글
    // https://medium.com/@galen.corey/understanding-apollo-fetch-policies-705b5ad71980

    watchQuery: {
      fetchPolicy: "cache-and-network",
      errorPolicy: "all",
    },
    query: {
      fetchPolicy: "cache-and-network",
      errorPolicy: "all",
    },
    mutate: {
      errorPolicy: "all",
    },
  },
});

export default client;
