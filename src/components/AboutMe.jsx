import React, { useState } from 'react';
import '../styles/About.css'; // Archivo de estilos para el componente
import CopyToClipboardButton from './copy';

const SobreMi = () => {
  const [email, setEmail] = useState('imanol11699@outlook.com');

  return (
    <div className="sobre-mi-container">
      <div className="photo"></div>
      <h1>@Imanol Bracciale</h1>
      <p>Desarrollador FullStack amante de los retos, proyectos nuevos y códigos novedosos.</p>
      <div className='containerEmail'>

        <div className="email" style={{ backgroundColor: '#add8e6', borderRadius: '5px', padding: '5px', border: '1px solid #8ab6d6' }}>
          {email}
        </div>
        <CopyToClipboardButton />
      </div>
    </div>
  );
};

export default SobreMi;
