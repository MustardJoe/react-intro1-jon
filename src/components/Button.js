import React, { Component } from 'react';
import PropTypes from 'prop-types';

let barry = 0;


class Button extends Component {
  static propTypes = {
    buttonProp: PropTypes.string.isRequired
  }

  clickHandler = event => {

    
    /* eslint-disable no-console */
    console.log(`you have hit the button, you are the winner, you win ${barry}`);
    barry++;
    if(barry === 4) {barry = 0;}
  }

  render() {
    return (
      <button onClick={this.clickHandler}>{this.props.buttonProp}</button>
    );
  }
}

export default Button;
