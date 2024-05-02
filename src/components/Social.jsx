import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Social.css';
import CopyToClipboardButton from './copy';

const RedesSociales = ({ language }) => {
  const texts={
    es:{
      titleh2:"#Redes Sociales",
      text:"Copiar"
    },
    en: {
      titleh2: "Social Medias",
      text:"Copy"
    }
  }
  const email= 'imanol11699@outlook.com'
  return (
    <div className="redes-sociales-container">
      <h2 className='h2'>
      {texts[language].titleh2}
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
      <div className='containerEmail'>

        <div className="email" style={{ backgroundColor: '#add8e6', borderRadius: '5px', padding: '5px', border: '1px solid #8ab6d6' }}>
          {email}
        </div>
        <CopyToClipboardButton  texts={texts[language].text}/>
      </div>
    </div>
  );
};

export default RedesSociales;
