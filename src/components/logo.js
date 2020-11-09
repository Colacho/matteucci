import React from 'react';
import Img from 'gatsby-image';
import { Link, graphql, useStaticQuery } from 'gatsby';

function Logo() {
  const query = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "matteucci-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <h1>
      <Link
        className="text-5xl font-bold font-gotham block"
        to="/"
        style={{ letterSpacing: '-0.7rem', width: '60px' }}
      >
        <Img fluid={query.logo.childImageSharp.fluid} />
      </Link>
    </h1>
  );
}
export default Logo;
