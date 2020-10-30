import React from 'react';
//import PropTypes from 'prop-types';
//import { useStaticQuery, graphql } from 'gatsby';

import '../styles/index.css';
import './layout.css';
import CardData from './carddata';
import CardInfo from '@/components/cardinfo';
//import Img from 'gatsby-image';

const VideoCard = ({ data }) => {
  const cardList = CardData.map((i) => (
    <div
      style={{
        margin: '2px',
        border: '2px solid black',
        borderRadius: '5px',
        display: 'inline-flex',
        width: '30%',
      }}
    >
      <CardInfo
        key={i.id}
        image={i.image}
        gender={i.gender}
        direction={i.direction}
        duration={i.duration}
        location={i.location}
      />
    </div>
  ));

  return (
    <div>
      {/* <Img fluid={image.childImageSharp.fluid} /> */}
      {cardList}
    </div>
  );
};

export default VideoCard;
