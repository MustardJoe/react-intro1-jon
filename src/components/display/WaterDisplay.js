import React from 'react';
import PropTypes from 'prop-types';

function WaterDisplay({ total, max }) {
  return (
    <section>
      <h1>{total} oz water drunk today</h1>
      <h2>
        <progress max={max} value={total} />
      </h2>
    </section>
  );
}

WaterDisplay.propTypes = {
  total: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default WaterDisplay;
