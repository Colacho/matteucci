import React from 'react';
import PropTypes from 'prop-types';
import Layout from '@/components/layout';
import SEO from '@/components/seo';
import Img from 'gatsby-image';
import Video from '@/components/video';
import { graphql } from 'gatsby';

const Title = ({ data: { titleJson: titleData = {} } = {} }) => {
  console.log('Page Context', titleData);

  return (
    <Layout>
      <div className="container mx-auto">
        <SEO title={`Video - ${titleData.name || ''}`} />
        <h2 className="">{titleData.name}</h2>
        <p className="" dangerouslySetInnerHTML={{ __html: titleData.description }}></p>
      </div>
      {/* TODO add SEO seo={pageContext?.seo} */}
      {/* <div className="block text-center">
        <Img className="w-64 text-center" fluid={titleData.image.childImageSharp.fluid} />
      </div> */}
      <div className="bg-primary-600 p-4">
        {titleData.video && <Video video={titleData.video} />}
      </div>
      <div className="container mx-auto grid grid-cols-2">
        <div className="grid grid-cols-1">
          <h4>Participantes:</h4>
          <div className="inline-flex">
            <div>
              <Img
                className="w-12 rounded-full"
                fluid={titleData.dataSheet.cast.act1.image.childImageSharp.fluid}
              />
            </div>
            <div className="m-4">
              <p>{titleData.dataSheet.cast.act1.name}</p>
            </div>
          </div>
          <div className="inline-flex">
            <div>
              <Img
                className="w-12 rounded-full"
                fluid={titleData.dataSheet.cast.act2.image.childImageSharp.fluid}
              />
            </div>
            <div className="m-4">
              <p>{titleData.dataSheet.cast.act2.name}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <h4>Equipo:</h4>
          <div className="inline-flex content-center">
            <div>
              <Img
                className="w-12 rounded-full"
                fluid={titleData.dataSheet.staff.director.image.childImageSharp.fluid}
              />
            </div>
            <div className="ml-4 divide-y divide-accent-500">
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
