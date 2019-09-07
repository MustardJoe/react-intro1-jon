import React from 'react';
import PropTypes from 'prop-types';

function WaterForm({ number, handleNumChange, handleSubmit }) {

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        value={number} 
        placeholder="how many Oz son?" 
        onChange={handleNumChange} 
      />
      <button className="formButton">Update Total</button>
    </form>
  );
}

WaterForm.propTypes = {
  number: PropTypes.number.isRequired,
  handleNumChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default WaterForm;
