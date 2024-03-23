
import React from 'react';
import portraitImage from '../images/portrait.png';

function Home() {
  return (
    <div className="home jumbotron text-center" id="top">
      <img src={portraitImage} alt="Natalie Bo" className="img-fluid rounded-circle mb-3" style={{ maxWidth: '200px' }} />
      <h1 className="display-4">Muradhan KILINC</h1>
      <p className="lead">Front-End Web Developer.</p>
      <blockquote className="blockquote text-center">
        <p>"Empowering Businesses Through Intuitive Web Experiences."</p>
        <figcaption className="blockquote-footer">
          Server, <cite title="Source Title">Mr.GPT</cite>, 2024
        </figcaption>
      </blockquote>
      <hr className="my-4" />
    </div>
  );
}

export default Home;

