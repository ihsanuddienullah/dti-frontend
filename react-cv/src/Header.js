/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import logo from './logo.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <img src={logo} />
        </div>
      </div>
    );
  }
}

export default Header;
