import React from 'react';
import { Link } from 'gatsby';

function Logo() {
  return (
    <h1>
      <Link className="text-5xl font-bold font-gotham" to="/" style={{ letterSpacing: '-0.7rem' }}>
        TT
      </Link>
    </h1>
  );
}
export default Logo;
