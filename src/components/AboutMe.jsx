import React from 'react';
import '../styles/About.css'; // Archivo de estilos para el componente
 
const SobreMi = () => {
  
  return (
    <div className="sobre-mi-container">
      <img  alt='' className='photo' src={require("../assets/foto.jpg")}  />
      <h1>@Imanol Bracciale</h1>
      <p>Desarrollador FullStack amante de los retos, proyectos nuevos y códigos novedosos.</p>
       
    </div>
  );
};

export default SobreMi;
