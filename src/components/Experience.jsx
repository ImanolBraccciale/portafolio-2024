import React from 'react';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import '../styles/Abilitys.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Experience = ({ language }) => {
    const texts = {
        es: {
            experience: 'Experiencia',
            fullstackManhwas: 'Desarrollé desde el inicio su página web para la monetización de sus servicios, planifiqué y creé su aplicación web tanto frontend, backend, base de datos, SEO, gestión de VPS entre otras. Para optimizar el rendimiento y adaptarlo a largo plazo, implementé un sistema con AWS S3 para la gestión de imágenes por posibles cambios.',
            eFerreteria: 'Durante mis estudios en Soy Henry, participé en un proyecto en grupo formado por  7 programadores donde me desempeñé como líder de backend, lo que me permitió desarrollar habilidades blandas y realizar el CRUD de productos, usuarios, pasarela de pagos, base de datos y su despliegue en el servidor.',
            teachingAssistant: 'Colaboré estrechamente con los instructores para preparar y facilitar clases, además de brindar apoyo individualizado a los estudiantes en sesiones de estudio y tutorías. Proporcioné retroalimentación constructiva sobre el progreso de los estudiantes, lo cual fui reconocido con la insignia de liderazgo al finalizar mi estadía.'
        },
        en: {
            experience: 'Experience',
            fullstackManhwas: 'I developed their website from scratch for the monetization of their services, planned and created their web application including frontend, backend, database, SEO, VPS management, among others. To optimize performance and adapt it for the long term, I implemented a system with AWS S3 for managing images due to possible changes.',
            eFerreteria: 'During my studies at Soy Henry, I participated in a group project with 7 programmers where I served as a backend leader, allowing me to develop soft skills and perform the CRUD of products, users, payment gateway, database, and its deployment on the server.',
            teachingAssistant: 'I collaborated closely with the instructors to prepare and facilitate classes, as well as provide individualized support to students in study sessions and tutorials. I provided constructive feedback on student progress, which was recognized with the leadership badge upon completion of my tenure.'
        }
    };

    return (
        <>
            <h2 className='title'><FontAwesomeIcon icon={faNetworkWired} /> {texts[language].experience}</h2>

            <div className="experiencia-container">
                <h3>FullStack The Universe of Manhwas</h3>
                <p>
                    {texts[language].fullstackManhwas}
                </p>
                <h3>E-Ferretería</h3>
                <p>
                    {texts[language].eFerreteria}
                </p>
                <br />

                <h3>Teaching Assistant</h3>
                <p>
                    {texts[language].teachingAssistant}
                </p>
                <br />
            </div>
        </>
    );
};

export default Experience;
