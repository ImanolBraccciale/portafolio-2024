import React from 'react';
import "../styles/NavBar.css"
const Navbar = ({ language }) => {
    const scrollToComponent = (componentId) => {
        const component = document.getElementById(componentId);
        if (component) {
            component.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    const texts = {
        es: { 
            aboutMe: 'Sobre Mí',
            skills: 'Habilidades',
            experience: 'Experiencia',
            projects: 'Proyectos',
            socialMedia: 'Redes',
        },
        en: {
            aboutMe: 'About Me',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            socialMedia: 'Social Media',
        },
    };

    return (
      <div className="navbar-fixed">
      <div className="navbar-container" style={{ maxWidth: '440px' }}>
      <button className="nav-button" onClick={() => scrollToComponent('sobreMi')}>{texts[language].aboutMe}</button>
                <button className="nav-button" onClick={() => scrollToComponent('habilidades')}>{texts[language].skills}</button>
                <button className="nav-button" onClick={() => scrollToComponent('experience')}>{texts[language].experience}</button>
                <button className="nav-button" onClick={() => scrollToComponent('proyectos')}>{texts[language].projects}</button>
                <button className="nav-button" onClick={() => scrollToComponent('redesSociales')}>{texts[language].socialMedia}</button>
      </div>
  </div>
    );
};

export default Navbar;
