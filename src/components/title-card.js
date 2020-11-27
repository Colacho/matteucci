import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const TitleCard = ({ slug, image, genre, name, duration, location }) => {
  return (
    <div className="rounded border-2 border-primary-400 bg-primary-600  relative">
      <div>
        <Link to={`../title${slug}`}>
          {image && (
            <Img
              className="rounded-t-sm hover:opacity-50 transition duration-300 ease-in-out"
              fluid={image}
            />
          )}
        </Link>
      </div>
      <div className="p-2 flex flex-col text-sm text-gray-400 text-opacity-25">
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
