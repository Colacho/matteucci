import React from 'react';
import T from 'prop-types';
import { Link } from 'gatsby';

const VideoCard = ({ image, videoSrcURL, gender, duration, location, direction }) => {
  return (
    <div>
      <div className="hover:opacity-50">
        <Link to="/page-2/" state={{ vidLoc: videoSrcURL }}>
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
  videoSrcURL: T.string,
  gender: T.string,
  direction: T.string,
  duration: T.string,
  location: T.string,
};
export default VideoCard;
