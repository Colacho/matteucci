import React from 'react';
import PropTypes from 'prop-types';
import Logo from '@/components/logo';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import cx from 'classnames';

const Header = ({ siteTitle }) => {
  const location = useLocation();
  console.log('location', location);

  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between content-center px-4 md:px-8">
        <Logo />
        <div className="self-center">
          <ul className="flex -mx-4">
            <li className="block">
              <Link
                to="/"
                className={cx('px-4 py-2 inline-block', {
                  'border-b-2 border-accent': location.pathname === '/',
                })}
              >
                Home
              </Link>
            </li>
            <li className="block">
              <Link
                to="/titles"
                className={cx('px-4 py-2 inline-block', {
                  'border-b-2 border-accent': location.pathname === '/titles',
                })}
              >
                Titles
              </Link>
            </li>
            <li className="block">
              <Link
                to="/contact"
                className={cx('px-4 py-2 inline-block', {
                  'border-b-2 border-accent': location.pathname === '/contact',
                })}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Matteucci',
};

export default Header;
