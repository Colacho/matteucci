import React from 'react';
import Img from 'gatsby-image';

import { graphql, StaticQuery } from 'gatsby';
import { node } from 'prop-types';

const TitleGrid = ({ data }) => {
  const query = graphql`
    query {
      allTitleJson {
        edges {
          node {
            image {
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                }
              }
            }
            dataSheet {
              direction
              duration
              genre
              location
            }
            id
          }
        }
      }
    }
  `;
  return (
    <div>
      {data.allTitleJson.edge.forEach((node) => {
        <div>
          <p>Direccion: {node.dataSheet.direction}</p>
        </div>;
      })}
    </div>
  );
};

export default TitleGrid;
