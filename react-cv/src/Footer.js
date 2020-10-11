/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import logo from './logo-header.png';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src={logo} />
            <p>Learn to code, learn to creative.</p>
          </div>
          <ul className="footer-list">
            <li>About Me</li>
            <li>Contact Me</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
