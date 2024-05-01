import React from 'react';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import '../styles/Abilitys.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Experience = ({ experiencia }) => {
    return (
        <>
            <h2 className='title'><FontAwesomeIcon icon={faNetworkWired} /> Experiencia</h2>

            <div className="experiencia-container">
                <h3>FullStack en The Universe of Manhwas</h3>
                <p>
                    En The Universe of Manhwas desarrollé desde el inicio su página web
                    para la monetización de sus servicios, planifiqué y creé su aplicación web
                    tanto frontend, <span style={{ color: '#ffcc80' }}>backend</span>, <span style={{ color: '#ffcc80' }}>base de datos</span>, 
                    <span style={{ color: '#ffcc80' }}>SEO</span>, gestión de <span style={{ color: '#ffcc80' }}>VPS</span> entre otras. Para
                    optimizar el rendimiento y adaptarlo a largo plazo, implementé un sistema con
                    AWS S3 para la gestión de imágenes por posibles cambios. La página cuenta con un sistema
                    seguro para el usuario, eficiencia en imágenes, buen control
                    de panel de administrador y está optimizada para tráfico alto.
                </p>

                <h3>Teaching Assistant</h3>
                <p>
                    Como Teaching Assistant en Henry, colaboré estrechamente
                    con los instructores para preparar y facilitar clases,
                    además de brindar<span style={{ color: '#ffcc80' }}> apoyo individualizado a los estudiantes </span>  
                    en sesiones de estudio y tutorías. Proporcioné<span style={{ color: '#ffcc80' }}> retroalimentación </span>    
                    constructiva sobre el progreso de los estudiantes y participé en la
                    mejora continua del programa académico, lo cual fui reconocido con la
                    insignia de <span style={{ color: '#ffcc80' }}>liderazgo</span> al finalizar mi estadía.
                </p>
                <br />
                <h3>E-Ferretería</h3>
                <p>
                    Durante mis estudios en Soy Henry, participé en un proyecto en grupo formado por programa
                    7 programadores donde me desempeñé como líder de <span style={{ color: '#ffcc80' }}>backend</span>, 
                    lo que me permitió desarrollar <span style={{ color: '#ffcc80' }}>habilidades blandas </span>
                    y realizar el CRUD de productos, usuarios, pasarela de pagos, base de datos y su despliegue en el servidor.
                </p>
                <br />
            </div>
        </>
    );
};

export default Experience;
