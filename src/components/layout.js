/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Header from './header';
import { Helmet } from 'react-helmet';
import Youtube from '@/data/icons/youtube.svg';
import Instagram from '@/data/icons/instagram.svg';
import Facebook from '@/data/icons/facebook.svg';
import Email from '@/data/icons/email.svg';
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="h-full">
      <Helmet>
        <html className="h-screen"></html>
        <body className="bg-primary text-primary-contrast font-roboto h-screen"></body>
      </Helmet>

      <div className="h-full flex flex-col items-stretch">
        <Header className="flex-shrink" siteTitle={data.site.siteMetadata?.title || 'Title'} />
        <main className="flex-grow">{children}</main>

        <footer className="flex-shrink container mx-auto grid grid-cols-2  items-end p-2 mt-4">
          <div className="text-xs">
            <div>
              © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
            </div>
            <div>
              Icons made by{' '}
              <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
                Freepik
              </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </div>
          <div className="inline-flex justify-end gap-2">
            <a
              href="https://www.youtube.com/channel/UCTh6Ixk5RnRBWaUwsFoVl2w "
              target="_blank"
              rel="noreferrer"
            >
              <img src={Youtube} alt="Youtube" className="w-6" />
            </a>
            <a href="https://www.instagram.com/matteucci.ar/" target="_blank" rel="noreferrer">
              <img src={Instagram} alt="Instagram" className="w-6" />
            </a>
            <a href="https://www.facebook.com/javier.matteucci" target="_blank" rel="noreferrer">
              <img src={Facebook} alt="Facebook" className="w-6" />
            </a>
            <Link to="/contact/">
              <img src={Email} alt="eMail" className="w-6" />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
