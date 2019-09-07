import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WaterDisplay from '../components/display/WaterDisplay';
import WaterForm from '../components/form/WaterForm';

class WaterTracker extends Component {
  static propTypes = {
    maxWater: PropTypes.number,
  };
  static defaultProps = {
    maxWater: 32,
  };

  state = {
    waterInput: '',
    totalWater: 0,
    maxWater: 1000,
  };

  handleNumChange = ({ target }) => {
    this.setState({ waterInput: Number.parseInt(target.value) });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => {
      return {
        totalWater: state.waterInput + state.totalWater,
        waterInput: '',
      };
    });
  }

  render() {
    return (
      <>
        <WaterDisplay
          total={this.state.totalWater}
          max={this.state.maxWater}
        />
        <WaterForm
          handleSubmit={this.handleSubmit}
          number={this.state.waterInput}
          handleNumChange={this.handleNumChange}
        />
      </>
    );
  }

}

export default WaterTracker;
