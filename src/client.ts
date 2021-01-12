import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
// import { onError } from "@apollo/client/link/error";

// Instantiate required constructor fields
const httpLink = createHttpLink({
    uri: "https://api.baseql.com/airtable/graphql/appgIAAYooKJM4hyP"
});

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//     if (graphQLErrors)
//       graphQLErrors.map(({ message, locations, path }) =>
//         console.error(
//           `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//         )
//       );
//   });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});



