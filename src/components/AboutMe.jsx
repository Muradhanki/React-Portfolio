import React from 'react';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <div className="container" id="about">
      <div className="row">
        <div className="col-12 text-center">
          <h2>About Me</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <p>
As a passionate Web Developer specializing in creating dynamic and user-friendly websites, I have honed my skills across a spectrum of front-end development tools and technologies. I possess expertise not only in HTML, CSS, and JavaScript but also in other crucial elements of front-end development such as responsive design, accessibility standards, version control systems like Git, and front-end frameworks like React, Angular, or Vue.js. My commitment to staying current with emerging technologies ensures that I can deliver cutting-edge solutions that meet the evolving needs of clients and users alike.</p>
        </div>
        <div className="col-md-6 text-center">
          <div className="inner-content">
            <ul className="facts-custom-list">
              <li><i className="bi bi-chevron-compact-right"></i> <strong>Based:</strong> London, UK</li>
              <li><i className="bi bi-chevron-compact-right"></i> <strong>Degree:</strong> Master of Science</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Contact Me to to get help with your future projects</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;