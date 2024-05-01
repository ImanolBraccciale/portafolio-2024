import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Social.css';

const RedesSociales = () => {
  return (
    <div className="redes-sociales-container">
      <h2 className='h2'>
        #Redes Sociales
      </h2>
      <div className="redes-sociales-buttons">
        <a href="https://www.linkedin.com/in/imanol-bracciale/" target="_blank" rel="noopener noreferrer" className="neon-button linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </a>
        <a href="https://github.com/ImanolBraccciale" target="_blank" rel="noopener noreferrer" className="neon-button github">
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default RedesSociales;
