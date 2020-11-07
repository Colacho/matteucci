import React from 'react';
import { Link } from 'gatsby';
import L from 'prop-types';
import Video from '@/components/video';

import Layout from '../components/layout';
import SEO from '../components/seo';
import VideoCard from '@/components/video-card';
//import Img from 'gatsby-image';
//import VideoGrid from '@/components/video-grid';

const SecondPage = () => {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

// Gatsby detects this query, and adds it in the data prop as seen above
// export const query = graphql`
//   query {
//     item01: file(relativePath: { eq: "bonitasChico.jpg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fluid(maxWidth: 500) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     item02: file(relativePath: { eq: "jr.jpg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fluid(maxWidth: 500) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;
SecondPage.protoTypes = {
  location: L.object,
};
export default SecondPage;
