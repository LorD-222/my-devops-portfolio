// src/HomePage.js
import React from 'react';
import './HomePage.css';
import Projects from './Projects';
import About from './About';
import Welcome from './Welcome';

function HomePage() {
  return (
    <div className="home-page">
    <div className="content">
        <Welcome />
        <div className="center-content">
            <img src="/devops.png" alt="DevOps" />
        </div>
        <About />
    </div>
    <Projects />
    </div>
  );
}

export default HomePage;