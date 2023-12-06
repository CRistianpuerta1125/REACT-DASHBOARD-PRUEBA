// SectionThree.js
import React from 'react';
import './SectionThree.css'; // Importa tus estilos CSS si es necesario

function SectionThree() {
  return (
    <div className="section-three">
      <div className="user-profile">
        <img
          src="Dmian.jpg"
          alt="Perfil de usuario"
          className="profile-image"
        />
        <h2 className="username">Damian calderon</h2>
        <p className="user-bio">Biografía o descripción del usuario</p>
      </div>
    </div>
  );
}

export default SectionThree;
