import React from 'react';
import '../styles/About.css'; // Archivo de estilos para el componente
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
 
const SobreMi = () => {
  
  return (
    <div className="sobre-mi-container">
      <img  alt='' className='photo' src={require("../assets/foto.jpg")}  />
      <div className='containerT'>

      <h1>@Imanol Bracciale</h1>
      <Link to="https://drive.google.com/file/d/1sadPgFfWx63Wi0KYy7vnxvwbS_WaBHN5/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
      <Button variant="contained" color="primary" >
        CV
      </Button>
      </Link>
      </div>
      <p>Desarrollador FullStack amante de los retos, proyectos nuevos y códigos novedosos.</p>
       
    </div>
  );
};

export default SobreMi;
