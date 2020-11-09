import React from 'react';
import PropTypes from 'prop-types';
import Layout from '@/components/layout';
import SEO from '@/components/seo';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const TestGrid = ({ data: { allTitleJson: titlesData = {} } = {} }) => {
  console.log('Page Context', titlesData.edges);

  return (
    <Layout>
      {/* TODO add SEO seo={pageContext?.seo} */}
      <SEO title={'Video Grid'} />
      <ul>
        {titlesData.edges.map(({ node: titleData }) => (
          <li key={titleData.id}>
            <h3>{titleData.name}</h3>
            {titleData.image && <Img fluid={titleData.image.childImageSharp.fluid} />}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

TestGrid.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query {
    allTitleJson {
      edges {
        node {
          id
          name
          description
          fields {
            slug
          }
          image {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          dataSheet {
            genre
          }
        }
      }
    }
  }
`;

export default TestGrid;
