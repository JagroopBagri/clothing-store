import React from 'react';
import Header from '../components/Header';

function About() {
  return (
    <div className="About--page">
      <Header></Header>
      <div className="about--container">
        <p>About</p>
      </div>
      <div className="about--preview--container">
        <div className="about--detail">
          <p>Created in 2022 by Jagroop Bagri.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
