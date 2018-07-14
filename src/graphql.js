import gql from 'graphql-tag';

// export default gql`
//   query {
//     homePages {
//       id
//       title
//       subtitle
//       bannerImage {
//         fileName
//         url
//       }
//       section1Image {
//         fileName
//         url
//       }
//       section1Header
//       section1Subheader
//       section1Text
//       sectionImage {
//         fileName
//         url
//       }
//     }
//   }
// `;

export default gql`
  query {
    messages {
      id
      messageText
    }
  }
`;
