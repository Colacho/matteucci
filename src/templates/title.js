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
      {/* TODO add SEO seo={pageContext?.seo} */}
      <SEO title={`Video - ${titleData.name || ''}`} />
      <h2>{titleData.name}</h2>
      <p dangerouslySetInnerHTML={{ __html: titleData.description }}></p>
      <Img fluid={titleData.image.childImageSharp.fluid} />
      {titleData.video && <Video video={titleData.video} />}
      <ul>
        <li></li>
      </ul>
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
      }
    }
  }
`;

export default Title;
