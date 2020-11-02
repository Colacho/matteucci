import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import VideoCard from '../components/video-grid';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="bg-blue-500 text-white">Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <VideoCard />
    </Layout>
  );
};

export default IndexPage;
