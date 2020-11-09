import React from 'react';
import PropTypes from 'prop-types';
import Logo from '@/components/logo';

const Header = ({ siteTitle }) => (
  <header className="py-4 border-accent-500 border-b">
    <div className="container mx-auto">
      <Logo />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Matteucci',
};

export default Header;
