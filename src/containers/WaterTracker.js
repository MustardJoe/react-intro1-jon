import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WaterDisplay from '../components/display/WaterDisplay';
import WaterForm from '../components/form/WaterForm';
import TooMuch2 from '../components/toomuch/TooMuch2';

class WaterTracker extends Component {
  static propTypes = {
    maxWater: PropTypes.number,
    waterInput: PropTypes.number,
  };
  static defaultProps = {
    maxWater: 32,
  };

  state = {
    waterInput: 0,
    totalWater: 0,
    maxWater: 1000,
    tooMuchMsg: '',
  };

  
  

  handleNumChange = ({ target }) => {
    this.setState({ waterInput: Number.parseInt(target.value) });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => {
      console.log('here i am', state);
      return {
        totalWater: state.waterInput + state.totalWater,
        waterInput: 0,
      };
    });
  }

  render() {
    if(this.state.totalWater > this.state.maxWater) {
      this.setState(state => {
        tooMuchMsg: 'You have had too much water!';
      }); 
    }


    return (
      <>
        <WaterDisplay
          total={this.state.totalWater}
          max={this.state.maxWater}
        />
        <WaterForm
          handleSubmit={this.handleSubmit}
          numberOz={Number.parseInt(this.state.waterInput)}
          handleNumChange={this.handleNumChange}
        />
        <TooMuch2 tooMuchMsg={this.state.tooMuchMsg}/>
      </>
    );
  }

}

export default WaterTracker;
