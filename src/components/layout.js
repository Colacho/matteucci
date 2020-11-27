/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import { Helmet } from 'react-helmet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutubeSquare,
  faInstagramSquare,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

        <footer className="flex justify-center flex-shrink container mx-auto p-2 mt-4">
          <div className="inline-flex gap-8">
            <a
              href="https://www.youtube.com/channel/UCTh6Ixk5RnRBWaUwsFoVl2w "
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutubeSquare} size="3x" />
            </a>
            <a href="https://www.instagram.com/matteucci.ar/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
            </a>
            <a href="https://www.facebook.com/javier.matteucci" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
            </a>
            <a href="mailto:someone@example.com">
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
            </a>
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
