import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="bg-blue-500 text-white">Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem1' }}></div>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  );
};

export default IndexPage;
