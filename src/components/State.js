import React, { Component } from 'react';

class State extends Component {
  state = {
    name: 'bigState',
    otherStat: 'lotsOStates',
    sparticus: true,
  }

  handleClick = () => {
    this.setState(state => {
      if(state.otherStat === 'noMoreState') { 
        return {
          otherStat: state.otherStat = 'lotsOStates'
        };
      } else {

        return {
          otherStat: state.otherStat = 'noMoreState'
        };
      }
    });
  }

  render() {
    const { name, otherStat, sparticus } = this.state;
    return (
      <dl>
        <button onClick={this.handleClick}>Update otherStat</button>
        <dt>Name</dt>
        <dd>{name}</dd>

        <dt>otherStat</dt>
        <dd>{otherStat}</dd>

        <dt>sparticus</dt>
        <dd>{sparticus}</dd>

      </dl>
    );
  }
}

export default State;
