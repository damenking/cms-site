import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
// import Page from './page';

const getData = gql`
  query {
    homePages {
      id
      title
      subtitle
    }
  }
`;

const Self = styled.div``;

const HomePage = ({ data: HomePageData }) => (
  <h1>
daaamen
  </h1>
);

export default graphql(getData)(HomePage);

// export default () => (
// <Query query={getData}>
//   {({ loading, error, data }) => {
//     if (loading) return 'Loading...';
//     if (error) return `Error! ${error.message}`;
//     return (
//       <Self>
//         {data.homePages.map(homePage => (
//           <div key={homePage.id}>
//             <h1>
//               {message.messageText}
//             </h1>
//           </div>
//         ))}
//       </Self>
//     );
//   }}
// </Query>
//   <h1>
// hello
//   </h1>
// );
