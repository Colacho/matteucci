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
import { Helmet } from 'react-helmet';
import './layout.css';
import Footer from '@/components/footer';

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
    <>
<<<<<<< HEAD
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
      // style={{
      //   margin: `0 auto`,
      //   maxWidth: 960,
      //   padding: `0 1.0875rem 1.45rem`,
      // }}
      >
=======
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <Helmet>
        <body className="bg-primary text-primary-contrast font-roboto"></body>
      </Helmet>
      <div className="container mx-auto">
>>>>>>> c73aeb0ec9df03999a30981d9a39dbcc1fe5150c
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
<<<<<<< HEAD
          <Footer />© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
=======
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
>>>>>>> c73aeb0ec9df03999a30981d9a39dbcc1fe5150c
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
