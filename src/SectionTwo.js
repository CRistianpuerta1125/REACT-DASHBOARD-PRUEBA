// SectionTwo.js
import React from 'react';
import './SectionTwo.css';
import './SearchBar.css'; // Importa los estilos de la barra de búsqueda

function SectionTwo() {
  return (
    <div className="section-two">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar..."
          className="search-input"
        />
        <button className="search-button">Buscar</button>
      </div>
      <div className="main-content">
        <div className="image-row">
          <img
            src="imagen-1.jpg"
            alt="Imagen 1"
            className="content-image"
          />
          <img
            src="imagen-2.jpg"
            alt="Imagen 2"
            className="content-image"
          />
          <img
            src="imagen-3.jpg"
            alt="Imagen 3"
            className="content-image"
          />
        </div>
        <div className="image-row">
          <img
            src="imagen-4.jpg"
            alt="Imagen 4"
            className="content-image"
          />
          <img
            src="imagen-5.jpg"
            alt="Imagen 5"
            className="content-image"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
