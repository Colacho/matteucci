import React from 'react';
import PropTypes from 'prop-types';

const BlackFringe = ({ children, title }) => {
  return (
    <div className="bg-primary-600 p-8 pt-4 w-full">
      <h3 className="container mx-auto mb-4">{title}</h3>
      {children}
    </div>
  );
};
BlackFringe.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default BlackFringe;
