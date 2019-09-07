import React from 'react';
import PropTypes from 'prop-types';

function TooMuch2({ tooMuchMsg }) {
  return (
    // eslint-disable-next-line react/no-unescaped-entities
    <h2>{tooMuchMsg}</h2>
  );
}

TooMuch2.propTypes = {
  tooMuchMsg: PropTypes.string.isRequired,
};

export default TooMuch2;
