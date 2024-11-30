import React from 'react';
import "../styles/Abilitys.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

const Habilidades = ({ habilidades }) => {
    const habilidadesConColor = {
        JavaScript: '#fcd600da',
        TypeScript: '#3178c6',
        Python: '#3128c6',
        AWS: '#ff9900ce',
        VPS: '#007acccc',
        MongoDB: '#4db33dc4',
        Django: '#4dc83dc4',
        PostgreSQL: '#336791',
        'Next.js': '#61dafbc7',
        React: '#015a96d8',
        'Java': '#e02841c4',
        'Nest.js': '#e0234fc4',
        'Node.js': '#68a063c7'
      };
  return (
    <>
    <h2 className='title'><FontAwesomeIcon icon={faLaptop} /> Habilidades</h2>

    <div className="habilidades-container">
      {habilidades.map((habilidad, index) => (
          <span key={index} className="habilidad" style={{ backgroundColor: habilidadesConColor[habilidad] }}>
          {habilidad}
        </span>
      ))}
    </div>
      </>
  );
};

export default Habilidades;
