import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const TitleCard = ({ slug, image, genre, name, duration, location }) => {
  return (
    <div className="rounded border border-primary relative">
      <div className="relative group">
        {image && <Img className="rounded-t-sm" fluid={image} />}
        <Link
          to={`../title${slug}`}
          className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center transition duration-300 ease-in-out opacity-0 hover:opacity-100"
        >
          <span className="text-center rounded-full border border-accent-400 p-2 bg-green-500 bg-opacity-50">
            ver
          </span>
        </Link>
      </div>
      <div className="p-2 flex flex-col text-sm text-gray-500">
        <p>{genre}</p>
        <Link to={`../title${slug}`}>
          <h5 className="text-white pb-4">{name}</h5>
        </Link>
        <p>Duración: {duration}</p>
        <p>Locación: {location}</p>
      </div>
    </div>
  );
};
TitleCard.propTypes = {
  slug: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.element,
  genre: PropTypes.string,
  duration: PropTypes.string,
  location: PropTypes.string,
};
export default TitleCard;
