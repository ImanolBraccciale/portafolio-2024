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

const Proyecto = ({ nombre, descripcion, tecnologias, imagen, codigo, url }) => {
  return (
    <div className="proyecto">
      <div className='containerTitle'>
        <h3>{nombre}</h3>
      </div>

      <p>{descripcion}</p>
      <p className="tecnologias">{tecnologias}</p>
      <div className="botones">
        {codigo && (
          <a href={codigo} target="_blank" rel="noopener noreferrer">
            <Button
              variant="contained"
              size="small"
              style={{
                color: '#fff',
                backgroundColor: '#6c5ce7', // Light pastel green
                fontWeight: 'bold',
                fontSize: '0.8em',
                '&:hover': {
                  backgroundColor: '#a29bfe', // Color change on hover
                },
              }}
              startIcon={<FontAwesomeIcon icon={faCode} />}
            >
              Code
            </Button>
          </a>
        )}
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button
              variant="contained"
              size="small"
              style={{ color: '#000', fontWeight: 'bold', padding: "0.5em 0", marginLeft: "4px" }}
              startIcon={<FontAwesomeIcon icon={faEye} />}
            >
              URL
            </Button>
          </a>
        )}
      </div>
      <img src={imagen} alt={nombre} className="imagen-proyecto2" />
    </div>
  );
};


const Proyectos = ({ language }) => {
  const texts = {
    es: {
      titleh2: "Proyectos",
      descripcionDigpatho: "Plataforma para la gestión de imágenes médicas y anotaciones, con integración de infraestructura en la nube y sistemas de inteligencia artificial.",
      descripcionManhwas: "Página de lectura de cómics con monetización a través de Google Adsense, imágenes subidas a AWS S3 y un panel de administración.",
      descripcionFerre: "Página de gestión de productos especializada en paneles para la administración de mercancías y ventas.",
    },
    en: {
      titleh2: "Projects",
      descripcionDigpatho: "Platform for managing medical images and annotations, with cloud infrastructure integration and artificial intelligence systems.",
      descripcionManhwas: "Comic reading page with monetization through google adsense, images uploaded to AWS S3, and administrator dashboard.",
      descripcionFerre: "Product Management page specialized in Dashboard for merchandise and sales management.",
    }
  }
  return (
    <div className="proyectos-container">
      <h2><FontAwesomeIcon icon={faBoltLightning} /> {texts[language].titleh2}</h2>

      <Proyecto
        nombre="Digpatho"
        descripcion={texts[language].descripcionDigpatho}
        tecnologias={
          <>
            <span className="Django"><FontAwesomeIcon icon={faServer} /> Django</span>
            <span className="react"><FontAwesomeIcon icon={faCode} /> Python</span>
            <span className="javascript"><FontAwesomeIcon icon={faCode} /> JavaScript</span>
            <span className="aws"><FontAwesomeIcon icon={faAws} /> AWS (EC2, ECS, ECR, etc.)</span>
            <span className="terraform"><FontAwesomeIcon icon={faBoltLightning} /> Terraform</span>
            <span className="sql"><FontAwesomeIcon icon={faMdb} /> SQL</span>
          </>
        }
         url={"https://digpatho.com"}
        imagen={require("../assets/dig.png")} // Asegúrate de tener esta imagen en tu proyecto
      />


      <Proyecto
        nombre="The Universe of Manhwas"
        descripcion={texts[language].descripcionManhwas}
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
        url={"https://theuniverseofmanhwas.com"}
        imagen={require("../assets/TUM.png")}
      />

      <Proyecto
        nombre="E-Ferreteria"
        descripcion={texts[language].descripcionFerre}
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
        codigo={"https://github.com/ImanolBraccciale/PF-Ferreteria"}
        imagen={require("../assets/rofe.png")}
      />
    </div>
  );
};

export default Proyectos;
