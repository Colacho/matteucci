import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const TitleCard = ({ slug, image, genre, name, duration, location }) => {
  return (
    <div className="rounded border-2 border-primary-400 bg-primary-600  relative">
      <div className="relative group">
        {image && <Img className="rounded-t-sm" fluid={image} />}
        <Link
          to={`../title${slug}`}
          className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-75 flex items-center justify-center transition duration-300 ease-in-out opacity-0 hover:opacity-100"
        >
          <span className="text-center">
            <FontAwesomeIcon icon={faPlay} size={'2x'} />
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
