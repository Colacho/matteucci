import React from 'react';
//import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import '../styles/index.css';
import './layout.css';
import Img from 'gatsby-image';

const VideoCard = ({ image }) => {
  console.log(image);
  return (
    <div>
      <Img fluid={image.childImageSharp.fluid} />
      <p>Info sobre video</p>
    </div>
  );
};

export default VideoCard;
