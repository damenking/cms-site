import { withClientState } from 'apollo-link-state';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import gql from 'graphql-tag';

import { ApolloLink } from 'apollo-link';

// Set up Cache
const cache = new InMemoryCache();
const defaults = {};
// Set up Local State
const stateLink = withClientState({
  cache,
  defaults,
});

const httpLink = createHttpLink({
  uri: 'https://api-uswest.graphcms.com/v1/cjj6hb7r809jm01eb4vj3txza/master',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token
        ? `Bearer ${token}`
        : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiYzY5ODRjMjEtNzJhMC00YzI1LTgzODAtODg4NDkxYTQ5NGFlIn0.qyFES8pRUEKNSj26x2_BC3Av5b5NQnsg8WM92J2OFno',
    },
  };
});

const link = ApolloLink.from([stateLink, authLink, httpLink]);

const Client = new ApolloClient({
  link,
  cache,
});

// const cmsQuery = Client.query({
//   fetchPolicy: 'no-cache',
//   query: gql`
//     query {
//       messageses {
//         id
//         messageText
//       }
//     }
//   `,
// });
// console.log(Client.cache);
// const data = Client.readQuery({ query: cmsQuery });
// console.log(data);
// const newMessage = {
//   id: '5',
//   messageText: 'Random message',
//   __typename: 'message',
// };
// Client.writeQuery({
//   query: cmsQuery,

//   data: {
//     messageses: [...data.messageses, newMessage],
//   },
// });

// const update={(cache, { data: { addTodo } }) => {
//   const { todos } = cache.readQuery({ query: GET_TODOS });
//   cache.writeQuery({
//     query: GET_TODOS,
//     data: { todos: todos.concat([addTodo]) }
//   });
// }}

// const update = () => {
//   cache.readQuery({ query: cmsQuery });
//   cache.writeQuery({ query: cmsQuery });
//   console.log(cache);
// };
// update();

// cache.readQuery({ query: cmsQuery });
// cache.writeQuery({
//   query: cmsQuery,
//   data: []
// });
// Client.query({
//   fetchPolicy: 'no-cache',
//   query: gql`
//     query {
//       messageses {
//         id
//         messageText
//       }
//     }
//   `,
// }).then(result => console.log(result));

// Make a single request to get all the data from graphcms
// Client.query({
//   fetchPolicy: 'no-cache',
//   query: gql`
//     query {
//       homePages {
//         id
//         title
//         subtitle
//         bannerImage {
//           fileName
//           url
//         }
//         section1Image {
//           fileName
//           url
//         }
//         section1Header
//         section1Subheader
//         section1Text
//         sectionImage {
//           fileName
//           url
//         }
//       }
//     }
//   `,
// }).then(result => console.log(result));
// Client.resetStore();
// Client.cache.reset();
export default Client;
