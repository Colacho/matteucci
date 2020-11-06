import React from 'react';
import T from 'prop-types';
import { Link } from 'gatsby';
import Video from './video';

const VideoCard = ({ videoId, image, videoSrcURL, gender, duration, location, direction }) => {
  return (
    <div>
      <div className="absolute m-20">
        <div className="border-solid border-4 border-yellow-500 bg-yellow-500 rounded h-auto w-auto text-center rounded-full ">
          Ver
        </div>
      </div>
      <div className="hover:opacity-50 flex-1 h-64">
        <Link to={`/video/${videoId}`}>{image}</Link>
      </div>
      <div className=" mt-8 h-auto">
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
