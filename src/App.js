// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';
import HomePage from './components/HomePage';
import SnakeGame from './components/SnakeGame';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/Project/snake_game" element={<SnakeGame />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;