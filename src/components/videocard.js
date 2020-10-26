import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import '../styles/index.css';
import './layout.css';
import Img from 'gatsby-image';
import SEO from '../components/seo';

const videocard = ({ data }) => {
  return (
    <div id="vidCont">
      <Img fluid={data?.item01?.childImageSharp?.fluid} />
      <p>Info sobre video</p>
    </div>
  );
};

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

export default videocard;
