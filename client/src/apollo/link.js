import { createUploadLink } from "apollo-upload-client";
import { from, split, HttpLink, concat, ApolloLink } from "@apollo/client";

const terminatingLink = createUploadLink({
  // new HttpLink() 사용시 업로드 불가능
  uri: "http://localhost:4300/graphql",
  credentials: "include",
});

const composedHttpLink = from([
  //errorLink,
  terminatingLink,
]);

let link;

link = composedHttpLink;

export { link };
