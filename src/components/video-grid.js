import React from 'react';
//import Video from '@/components/video';
//import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import '../styles/index.css';
import './layout.css';

import VideoCard from '@/components/video-card';
import Img from 'gatsby-image';

const VideoGrid = () => {
  const query = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "Afiche_Amadoras.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "Afiche_Bonitas.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "afiche_Schafhaus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const cardId = [
    {
      id: '1',
      image: <Img fluid={query.image1.childImageSharp.fluid} />,
      videoSrcURL: 'https://player.vimeo.com/video/139411080',
      gender: 'Documental',
      direction: 'Javier Matteucci',
      duration: '3 minutos',
      location: 'Rosario, Santa Fe',
    },
    {
      id: '2',
      image: <Img fluid={query.image2.childImageSharp.fluid} />,
      videoSrcURL: 'https://player.vimeo.com/video/99793754',
      gender: 'Documental',
      direction: 'Javier Matteucci',
      duration: '4 minutos',
      location: 'Rosario, Santa Fe',
    },
    {
      id: '3',
      image: <Img fluid={query.image3.childImageSharp.fluid} />,
      gender: 'Documental',
      direction: 'Javier Matteucci',
      duration: '5 minutos',
      location: 'Rosario, Santa Fe',
    },
  ];
  console.log(query);
  return (
    <div className="inline-flex flex-wrap ">
      {cardId.map((i) => (
        <div key={i.id} className="border-solid border-2 rounded px-2 py-2 m-2 shadow-lg">
          <VideoCard
            image={i.image}
            videoSrcURL={i.videoSrcURL}
            gender={i.gender}
            direction={i.direction}
            duration={i.duration}
            location={i.location}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
