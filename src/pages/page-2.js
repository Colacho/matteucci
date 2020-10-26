import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';

const SecondPage = ({ data }) => {
  console.log('data', data);

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>

      <Img fluid={data?.item01?.childImageSharp?.fluid} />
      <Img fluid={data?.item02?.childImageSharp?.fluid} />
    </Layout>
  );
};

// Gatsby detects this query, and adds it in the data prop as seen above
export const query = graphql`
  query {
    item01: file(relativePath: { eq: "bonitasChico.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    item02: file(relativePath: { eq: "jr.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default SecondPage;
