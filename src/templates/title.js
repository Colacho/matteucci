import React from 'react';
import PropTypes from 'prop-types';
import Layout from '@/components/layout';
import SEO from '@/components/seo';
import Img from 'gatsby-image';
import Video from '@/components/video';
import { graphql } from 'gatsby';
import BlackFringe from '@/components/black-fringe';

const Title = ({ data: { titleJson: titleData = {} } = {} }) => {
  console.log('Page Context', titleData);

  return (
    <Layout>
      <SEO title={titleData.name || ''} description={titleData.description || ''} />

      {/* TODO add SEO seo={pageContext?.seo} */}
      <BlackFringe title={titleData.name}>
        <div className="container mx-auto">
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: titleData.description }}></p>
          {titleData.video && <Video video={titleData.video} />}
        </div>
      </BlackFringe>

      <div className="container mx-auto flex mt-4 px-4 md:px-8">
        <div className="flex-1 flex-row">
          <h4 className="mb-4">Participantes:</h4>
          <div className="flex items-center gap-4 mb-4">
            <Img
              className="w-12 rounded"
              fluid={titleData.dataSheet.cast.act1.image.childImageSharp.fluid}
            />
            <p className="">{titleData.dataSheet.cast.act1.name}</p>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <Img
              className="w-12 rounded "
              fluid={titleData.dataSheet.cast.act2.image.childImageSharp.fluid}
            />
            <p>{titleData.dataSheet.cast.act2.name}</p>
          </div>
        </div>
        <div className="flex-1 flex-row">
          <h4 className="mb-4">Equipo:</h4>
          <div className="flex items-center gap-4">
            <div>
              <Img
                className="w-12 rounded"
                fluid={titleData.dataSheet.staff.director.image.childImageSharp.fluid}
              />
            </div>
            <div className="divide-y divide-accent-500">
              <p>Direción</p>
              <p>{titleData.dataSheet.staff.director.name}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Title.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($slug: String!) {
    titleJson(fields: { slug: { eq: $slug } }) {
      id
      name
      description
      fields {
        slug
      }
      image {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      video
      dataSheet {
        genre
        location
        staff {
          director {
            name
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        cast {
          act1 {
            name
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          act2 {
            name
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Title;
