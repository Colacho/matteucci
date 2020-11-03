import React from 'react';
import T from 'prop-types';
import { Link } from 'gatsby';

const VideoCard = ({ videoId, image, videoSrcURL, gender, duration, location, direction }) => {
  return (
    <div>
      <div className="hover:opacity-50">
        <Link to={`/video/${videoId}`} state={{ vidLoc: videoSrcURL }}>
          {image}
        </Link>
      </div>
      <div>
        <p>Genero: {gender}</p>
        <p>Dirección: {direction}</p>
        <p>Duración: {duration}</p>
        <p>Locación: {location}</p>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  image: T.element,
  videoId: T.string,
  videoSrcURL: T.string,
  gender: T.string,
  direction: T.string,
  duration: T.string,
  location: T.string,
};
export default VideoCard;
