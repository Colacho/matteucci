import React from 'react';
//import Video from '@/components/video';
//import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import VideoCard from '@/components/video-card';
import Img from 'gatsby-image';

const VideoGrid = ({ videos }) => {
  return (
    <div className="bg-gray-300 p-4">
      <div className="w-full">
        {videos.map((i) => (
          <div
            className="inline-flex flex-wrap border-solid border-2 rounded p-2 m-2 shadow-lg m-4"
            key={i.id}
          >
            <VideoCard
              videoId={i.id}
              image={i.image}
              videoSrcURL={i.videoSrcURL}
              genre={i.genre}
              direction={i.direction}
              duration={i.duration}
              location={i.location}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
