import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <a href="/">
        <img src="/docker.png" alt="Docker" className="logo-left" />
      </a>
      <div className="menu">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About Me</a>
      </div>
      <a href="/about">
        <img src="/rick.png" alt="About Me" className="logo-right" />
      </a>
    </nav>
  );
}

export default Navigation;
