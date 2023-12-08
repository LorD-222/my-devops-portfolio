import React from 'react';
import './HomePage.css';
import Projects from './Projects';
import About from './About';
import Welcome from './Welcome';

function ProjectsPage() {
  return (
    <div className="home-page">
    <Projects />
    </div>
  );
}

export default ProjectsPage;