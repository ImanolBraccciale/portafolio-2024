import React from 'react';
import '../styles/About.css'; // Archivo de estilos para el componente
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
 
const SobreMi = ({ language, texts }) => {

  
  return (
    <div className="sobre-mi-container">
      <img  alt='' className='photo' src={require("../assets/foto.jpg")}  />
      <div className='containerT'>

      <h1>@Imanol Bracciale</h1>
      <Link to={texts[language].cv}target="_blank" rel="noopener noreferrer">
      <Button variant="contained" color="primary" >
        CV
      </Button>
      </Link>
      </div>
      <p>{texts[language].description}</p>
    </div>
  );
};

export default SobreMi;
