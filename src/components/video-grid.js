import React from 'react';
//import Video from '@/components/video';
//import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

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
    <div className="bg-gray-300 p-4">
      <div className="inline-block w-full">
        <div className="mt-0 float-left">
          <h2>Ultimas producciones</h2>
        </div>
        <div className="mt-0 float-right">
          <button className="border-2 border-green-500 hover:bg-green-500 rounded">
            Mas trabajos
          </button>
        </div>
      </div>
      <div className="w-full">
        {cardId.map((i) => (
          <div
            className="inline-flex flex-wrap border-solid border-2 rounded p-2 m-2 shadow-lg m-4"
            key={i.id}
          >
            <VideoCard
              videoId={i.id}
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
    </div>
  );
};

export default VideoGrid;
