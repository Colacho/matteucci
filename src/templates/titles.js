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
      <div className="">
        <h3 className="container mx-auto">últimos titulos</h3>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {titlesData.edges.map(({ node: titleData }) => (
            <div
              key={titleData.id}
              className="rounded border-2 border-primary-400 bg-primary-600  relative"
            >
              <div>
                {titleData.image && (
                  <Img
                    className="rounded hover:opacity-50 transition duration-300 ease-in-out"
                    fluid={titleData.image.childImageSharp.fluid}
                  />
                )}
              </div>
              <div className="p-2 flex flex-col text-sm text-gray-400 text-opacity-25">
                <h5 className="text-white">{titleData.name}</h5>
                <p className="pb-2">{titleData.dataSheet.genre}</p>
                <p>Duración: {titleData.dataSheet.duration}</p>
                <p>Locación: {titleData.dataSheet.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

TestGrid.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allTitleJson(sort: { fields: [date], order: DESC }, limit: $limit, skip: $skip) {
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
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          dataSheet {
            direction
            duration
            genre
            location
          }
        }
      }
    }
  }
`;

export default TestGrid;
