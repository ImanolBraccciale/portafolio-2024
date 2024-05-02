import React from 'react';
import "../styles/NavBar.css"
const Navbar = () => {
    const scrollToComponent = (componentId) => {
        const component = document.getElementById(componentId);
        if (component) {
            component.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
      <div className="navbar-fixed">
      <div className="navbar-container" style={{ maxWidth: '440px' }}>
          <button className="nav-button" onClick={() => scrollToComponent('sobreMi')}>Sobre Mí</button>
          <button className="nav-button" onClick={() => scrollToComponent('habilidades')}>Habilidades</button>
          <button className="nav-button" onClick={() => scrollToComponent('experience')}>Experiencia</button>
          <button className="nav-button" onClick={() => scrollToComponent('proyectos')}>Proyectos</button>
          <button className="nav-button" onClick={() => scrollToComponent('redesSociales')}>Redes</button>
      </div>
  </div>
    );
};

export default Navbar;
