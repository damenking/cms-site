import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Home from './home/home';

// import Test from './test';

// const GET_TODOS = gql`
//   query {
//     homePages @client {
//       id
//       title
//       subtitle
//     }
//   }
// `;
// const GET_TODOS = gql`
//   query {
//     # networkStatus @client {
//     #   isConnected
//     # }
//     todos @client {
//       id
//       activity
//     }
//   }
// `;
// const GET_TODOS = gql`
//   query {
//     messageses @client {
//       id
//       messageText
//     }
//   }
// `;

export default () => (
  // <Query query={GET_TODOS} pollInterval={500}>
  //   {({ loading, error, data }) => {
  //     if (loading) return 'Loading...';
  //     if (error) return `Error! ${error.message}`;
  //     return (
  //       <div>
  //         {data.messageses.map(message => (
  //           <div key={message.id}>
  //             <h1>
  //               {message.messageText}
  //             </h1>
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   }}
  // </Query>
  <Home />
);
