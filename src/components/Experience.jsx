import React from 'react';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import '../styles/Abilitys.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Experience = ({ language }) => {
    const texts = {
        es: {
            experience: 'Experiencia',
            digpatho: 'Construí un sistema de registro de usuarios de extremo a extremo utilizando Django, Python y JavaScript, mejorando la gestión de datos de usuarios. Desarrollé infraestructura escalable en la nube con AWS (EC2, ECS, ECR, ABD, VPC) y Terraform, logrando un despliegue automatizado y seguro. Lideré un equipo de desarrollo frontend, organizando reuniones semanales y garantizando el cumplimiento de objetivos dentro de plazos establecidos. Conecté el backend con sistemas de IA, mejorando la precisión de las solicitudes automatizadas en un 40%, optimizando procesos para usuarios de salud.',
            fullstackManhwas: 'Desarrollé desde el inicio su página web para la monetización de sus servicios, planifiqué y creé su aplicación web tanto frontend, backend, base de datos, SEO, gestión de VPS entre otras. Para optimizar el rendimiento y adaptarlo a largo plazo, implementé un sistema con AWS S3 para la gestión de imágenes por posibles cambios.',
            eFerreteria: 'Durante mis estudios en Soy Henry, participé en un proyecto en grupo formado por  7 programadores donde me desempeñé como líder de backend, lo que me permitió desarrollar habilidades blandas y realizar el CRUD de productos, usuarios, pasarela de pagos, base de datos y su despliegue en el servidor.',
        },
        en: {
            experience: 'Experience',
            digpatho: 'Built a complete user registration system using Django, Python, and JavaScript, improving user data management. Developed scalable cloud infrastructure with AWS (EC2, ECS, ECR, ABD, VPC) and Terraform, achieving automated and secure deployments. Led a frontend development team, organizing weekly meetings and ensuring objectives were met within established deadlines. Connected the backend to AI systems, improving automated request accuracy by 40%, optimizing processes for healthcare users.',
            fullstackManhwas: 'I developed their website from scratch for the monetization of their services, planned and created their web application including frontend, backend, database, SEO, VPS management, among others. To optimize performance and adapt it for the long term, I implemented a system with AWS S3 for managing images due to possible changes.',
            eFerreteria: 'During my studies at Soy Henry, I participated in a group project with 7 programmers where I served as a backend leader, allowing me to develop soft skills and perform the CRUD of products, users, payment gateway, database, and its deployment on the server.',
        }
    };

    return (
        <>
            <h2 className='title'><FontAwesomeIcon icon={faNetworkWired} /> {texts[language].experience}</h2>

            <div className="experiencia-container">
                <h3>FullStack & DevOps Developer Part-Time - Digpatho</h3>
                <p>{texts[language].digpatho}</p>

                <h3>FullStack The Universe of Manhwas</h3>
                <p>
                    {texts[language].fullstackManhwas}
                </p>
                <h3>E-Ferretería</h3>
                <p>
                    {texts[language].eFerreteria}
                </p>
                <br />
                <br />
            </div>
        </>
    );
};

export default Experience;
