import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import '../styles/index.css';
import './layout.css';

const videocard = () => {
  return (
    <div id="vidCont">
      <img src="../images/bonitasChico.jpg" alt="" />
      <p>Info sobre video</p>
    </div>
  );
};

export default videocard;
