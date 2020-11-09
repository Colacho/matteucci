import React from 'react';
import type from 'prop-types';

const Video = ({ video }) => (
  <div className="video flex flex-row justify-center overflow-hidden relative">
    <iframe
      title="video_vimeo"
      src={video}
      width="853"
      height="479"
      frameBorder="0"
      allowFullScreen
      webkitallowfullscreen=""
      mozallowfullscreen=""
    />
  </div>
);

Video.propTypes = {
  video: type.string.isRequired,
};

export default Video;
