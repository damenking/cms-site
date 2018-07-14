import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import Client from './apollo';
import Main from './pages/index';
// import GetCmsData from './graphql';
// This is the same cache you pass into new ApolloClient

const Root = () => (
  <ApolloProvider client={Client}>
    <Main />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('app'));

module.hot.accept();

//         if (loading) {
//           return (
//             <p>
// Loading...
//             </p>
//           );
//         }
//         if (error) {
//           return (
//             <p>
// Error...
//             </p>
//           );
//         }
