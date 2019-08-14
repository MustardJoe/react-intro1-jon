import React, { Component } from 'react';
import PropTypes from 'prop-types';

// export default function footer({ footerMsg }) {
//   const footerContents = 'Dont Come to the Party Today, ';

//   return (
//     <h1>{footerContents} {footerMsg}</h1>
//   );

class Footer extends Component {
  static propTypes = {
    footerMsg: PropTypes.string.isRequired,
  }
  render() {
    return (
      <>
        <footer>
          Welcome your own doom, {this.props.footerMsg}
        </footer>
      </>
    );
  }
}

export default Footer;
