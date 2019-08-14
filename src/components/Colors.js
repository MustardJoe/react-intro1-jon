import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, hex }) {
  const color = {
    name,
    hex
  };
  const fields = Object.keys(color)
    .map(key => {
      return (
        <>
          <dt>{key}</dt>
          <dd style={{ color: hex }}></dd>
        </>
      );
    });


  return (
    <dl>
      {fields}
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
};

export default Color;
