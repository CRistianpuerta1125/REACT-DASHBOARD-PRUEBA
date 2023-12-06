// SectionOne.js
import React from 'react';
import './SectionOne.css'; // Importa tus estilos CSS si es necesario

function SectionOne() {
  return (
    <div className="section-one">
      <div className="side-menu">
        <div className="menu-item">♫ Music</div>
        <div className="menu-item">♚ Gaming</div>
        <div className="menu-item">✍ Education</div>
        <div className="menu-item">☣ Science & Tech</div>
        <div className="menu-item">☃ Entertainment</div>
        <div className="menu-item">⌛ Students Hubs</div>
      </div>
      <div className="music-player">
        <div className="player-icon">♪</div>
        <div className="player-info">
          <div className="song-title">Song Title</div>
          <div className="song-artist">Artist Name</div>
        </div>
        <div className="player-controls">
          <button>Play</button>
          <button>Pause</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
