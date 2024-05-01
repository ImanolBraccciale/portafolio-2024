import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faMdb, faAws, faImdb } from '@fortawesome/free-brands-svg-icons';
import mySvgIcon from '../assets/nest.svg';
import postIcon from '../assets/postgres.svg';
import { faBoltLightning, faServer, faDollarSign, faCode, faEye } from '@fortawesome/free-solid-svg-icons';
import CIcon from '@coreui/icons-react';
import { cibNextJs } from '@coreui/icons';
import "../styles/Projects.css"
import { Button } from '@mui/material';

const Proyecto = ({ nombre, descripcion, tecnologias, imagen }) => {
  return (
    <div className="proyecto">
      <div className='containerTitle'>
        <h3>{nombre}</h3>
      </div>
      
      <p>{descripcion}</p>
      <p className="tecnologias">{tecnologias}</p>
      <div className="botones">
          <Button variant="contained" size="small"      style={{
            color: '#fff',
            backgroundColor: '#6c5ce7', // Verde fuerte pastel
            fontWeight: 'bold',
            fontSize: '0.8em',
            '&:hover': {
              backgroundColor: '#a29bfe', // Cambio de color al hacer hover
            },
          }} startIcon={<FontAwesomeIcon icon={faCode} />}>
            Codigo
          </Button>
          <Button variant="contained" size="small" style={{ color: '#000', fontWeight: 'bold', padding: "0.5em 0", marginLeft: "4px" }} startIcon={<FontAwesomeIcon icon={faEye} />}>

          </Button>
        </div>
      <img src={imagen} alt={nombre} className="imagen-proyecto2" />

    </div>
  );
};

const Proyectos = () => {
  return (
    <div className="proyectos-container">
      <h2><FontAwesomeIcon icon={faBoltLightning} /> Proyectos</h2>
      <Proyecto
        nombre="The Universe of Manhwas"
        descripcion="Pagina de lectura de comics con monetizacion por google adsense, imagenes subidas a AWS S3 y Dashboard de administrador."
        tecnologias={
          <>
            <span className="react"><CIcon icon={cibNextJs} className='next' />Next.js</span>
            <span className="nodejs"><FontAwesomeIcon icon={faNodeJs} /> Node.js</span>
            <span className="aws"><FontAwesomeIcon icon={faAws} /> AWS</span>
            <span className="adsense"><FontAwesomeIcon icon={faDollarSign} /> Google Adsense</span>
            <span className="nestjs">
              <img src={mySvgIcon} alt="Nest.js" className="icon-svg" /> Nest.js
            </span>
            <span className="mongodb"><FontAwesomeIcon icon={faMdb} /> MongoDb</span>
            <span className="vps"><FontAwesomeIcon icon={faServer} /> VPS</span>
          </>
        }
        imagen={require("../assets/TUM.png")}
      />

      <Proyecto
        nombre="E-Ferreteria"
        descripcion="Pagina de Gestion de Productos especializado en Dashboard para la gestión de mercaderia y ventas."
        tecnologias={
          <>
            <span className="react"><CIcon icon={cibNextJs} className='next' />Next.js</span>
            <span className="React"><FontAwesomeIcon icon={faReact} />React</span>
            <span className="nodejs"><FontAwesomeIcon icon={faNodeJs} /> Node.js</span>
            <span className="vps">
              <img src={postIcon} alt="Postgres" className="icon-svg" /> Postgres
            </span>
          </>
        }
        imagen={require("../assets/rofe.png")}
      />
    </div>
  );
};

export default Proyectos;
