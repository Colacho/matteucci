import React from 'react';
import PropTypes from 'prop-types';
import Logo from '@/components/logo';

const Header = ({ siteTitle }) => (
  <header className="container mx-auto py-4">
    <Logo />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `Matteucci`,
};

export default Header;
