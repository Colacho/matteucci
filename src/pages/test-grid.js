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
      <div className="container mx-auto bg-primary-500">
        <p className="leading-loose tracking-widest text-center hidden sm:block">
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

      <div className="w-full items-start justify-center bg-primary-600 border-accent-500 border-b">
        <div className="container mx-auto grid grid-cols-6 justify-center flex my-4">
          <h3 className="col-start-1 col-end-3 my-2">últimos titulos</h3>

          <button className="rounded bg-accent-500 p-2 col-start-6 col-span-1 my-2 hover:bg-accent-400 transition duration-300 ease-in-out">
            ver todos ▶
          </button>
        </div>
        <div className="container mx-auto flex flex-wrap justify-between ">
          {titlesData.edges.map(({ node: titleData }) => (
            <div
              key={titleData.id}
              className="flex rounded m-4 shadow-lg bg-primary-400 relative grid grid-cols-1"
            >
              <div className="items-start grid grid-row-2">
                <div className="absolute place-self-center">
                  <button className="border-solid border-2 border-accent-500 bg-accent-500 rounded-full p-2">
                    ver
                  </button>
                </div>
                {titleData.image && (
                  <Img
                    className="rounded hover:opacity-50 transition duration-300 ease-in-out"
                    fluid={titleData.image.childImageSharp.fluid}
                  />
                )}
              </div>
              <div className="p-4 flex flex-wrap grid grid-rows-5 items-end">
                <p>{titleData.name}</p>
                <p>Direción: {titleData.dataSheet.direction}</p>
                <p>Duración: {titleData.dataSheet.duration}</p>
                <p>Género: {titleData.dataSheet.genre}</p>
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
