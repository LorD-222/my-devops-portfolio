// src/components/SnakeGame.js

import React from 'react';
import './SnakeGame.css';

const SnakeGame = () => {
  return (
    <div className="center-container">
      <div className="iframe-container">
        <iframe
          src="https://brumedi.ru/snake_game"
          title="Embedded Page"
          sandbox="allow-same-origin allow-scripts" // Настройте параметры sandbox в соответствии с вашими потребностями безопасности
        ></iframe>
      </div>
    </div>
  );
}


export default SnakeGame;
