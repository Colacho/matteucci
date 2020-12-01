import React from 'react';
import PropTypes from 'prop-types';

const BlackFringe = ({ children, title }) => {
  return (
    <div className="bg-primary-600 py-4 w-full">
      <div className="container mx-auto mb-4 px-4 md:px-8">
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};
BlackFringe.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default BlackFringe;
