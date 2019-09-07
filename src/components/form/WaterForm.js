import React from 'react';
import PropTypes from 'prop-types';

function WaterForm({ numberOz, handleNumChange, handleSubmit }) {

  return (
    <form onSubmit={handleSubmit}>
      <p>How much water?</p>
      <input 
        type="number" 
        value={numberOz} 
        placeholder="0" 
        onChange={handleNumChange} 
      />
      <button className="formButton">Update Total</button>
    </form>
  );
}

WaterForm.propTypes = {
  numberOz: PropTypes.number.isRequired,
  handleNumChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default WaterForm;
