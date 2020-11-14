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
      <div className="m-8 p-8 leading-loose tracking-widest bg-primary-500">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit nibh, ante fames curae augue class
          rhoncus pellentesque ornare pharetra, ridiculus dapibus habitasse elementum cras sagittis
          massa. Class dapibus vivamus sapien ullamcorper sagittis montes, eget integer nibh mus
          natoque eu, risus sociosqu feugiat rhoncus hac. Montes feugiat at faucibus porta primis
          venenatis, curae scelerisque viverra ad suspendisse, etiam gravida ullamcorper interdum
          phasellus. Sagittis primis nunc venenatis nisl aptent sed, non praesent parturient dictum
          hac aliquam magna, accumsan est mattis per habitasse. Magnis tellus id congue turpis mus
          netus curabitur metus dictum himenaeos malesuada porttitor senectus, donec proin
          sollicitudin justo non rutrum condimentum integer natoque pellentesque mollis aenean. Est
          malesuada netus curae iaculis pellentesque mauris vivamus nullam fusce, magnis ultrices
          dis etiam dui sapien sollicitudin nascetur, pulvinar duis commodo enim dictumst sed
          conubia senectus.
        </p>
      </div>
      <div className="inline-flex flex-wrap w-full items-start justify-center bg-primary-600 w-full border-accent-500 border-b">
        <div className="grid grid-cols-2 flex-wrap w-full justify-items-center">
          <h3 className="my-12 mx-8  flex-1">últimos titulos</h3>

          <button className="rounded bg-accent-500 p-2 my-12 mx-16 w-32  flex-1">ver todos</button>
        </div>
        {titlesData.edges.map(({ node: titleData }) => (
          <div key={titleData.id}>
            <h5 className="m-4">{titleData.name}</h5>

            <div className="rounded m-4 shadow-inner bg-primary-400 relative">
              <button className="absolute m-24 border-solid border-2 border-accent-500 rounded-full p-2">
                ver
              </button>
              {titleData.image && (
                <Img
                  className="rounded hover:opacity-50"
                  fluid={titleData.image.childImageSharp.fluid}
                />
              )}

              <div className="p-4">
                <p>Direción: {titleData.dataSheet.direction}</p>
                <p>Duración: {titleData.dataSheet.duration}</p>
                <p>Género: {titleData.dataSheet.genere}</p>
                <p>Locación: {titleData.dataSheet.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
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
