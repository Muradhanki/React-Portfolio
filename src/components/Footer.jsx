
import React from 'react';

import peachFuzzHeart from '../images/peach-fuzz-heart.png';

function Footer() {
  return (
    <div id="footer" className="text-center">
      <div className="container">
        <div className="socials text-center">
          <a href="https://github.com/Muradhanki" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/muradhan-kilinc-msc-bb056076/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
        </div>
        <h6>Created with <img src= {peachFuzzHeart} alt="Peach Fuzz Heart icon" style={{height: '1em', verticalAlign: 'middle'}} /> by Muradhan K</h6>
        <p>&copy; 2024 Muradhanki</p>
      </div>
    </div>
  );
}

export default Footer;
