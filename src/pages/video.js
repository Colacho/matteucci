import React from 'react';
// import { Link } from 'gatsby';
import type from 'prop-types';
// import Video from '@/components/video';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Video = ({ location }) => {
  // TODO: check location console in the browser and see how to extract the id from it. Hint: Use a function so we can reuse it later on.
  console.log('location', location);
  // TODO: videoId should be the id from URL
  const videoId = '2';
  return (
    <Layout>
      {/* TODO: desirable to have something like: {`Video - ${title}`} */}
      <SEO title="Video" />
      <h1>Hi from video id: {videoId}</h1>
      {/*<Link to="/">Go back to the homepage</Link>
      <Video videoSrcURL={location.state.vidLoc} /> */}
    </Layout>
  );
};

Video.propTypes = {
  location: type.object,
};
export default Video;
