/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import '../styles/index.css';
import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="bg-primary text-primary-contrast font-roboto">
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <main className="container mx-auto ">
        <main>{children}</main>
        <footer className="my-4">
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
