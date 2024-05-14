import './App.css';
import "./styles/star"
import SobreMi from './components/AboutMe';
import RedesSociales from './components/Social';
import Proyectos from './components/Projects';
import Habilidades from './components/Abilitys';
import Experience from './components/Experience';
import Navbar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('es'); // Estado para almacenar el idioma actual

  const texts = {
    es: {
      aboutMe: 'Sobre Mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      socialMedia: 'Redes Sociales',
      description: 'Desarrollador FullStack amante de los retos, proyectos nuevos y códigos novedosos.',
      cv:"https://drive.google.com/file/d/1teB2EZv7I4ThT2q-lZJOsYqWkl1nfmRR/view?usp=drive_link"
    },
    en: {
      aboutMe: 'About Me',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      socialMedia: 'Social Media',
      description: 'FullStack developer passionate about challenges, new projects, and innovative code.',
      cv:"https://drive.google.com/file/d/1-qeGnzhV26xmPLlM_yNkYc2Co7is0zoo/view?usp=drive_link"
    },
  };

  const habilidades = ["JavaScript", "TypeScript", "AWS", "VPS", "MongoDB", "PostgreSQL", "Next.js", "React", "Nest.js", "Node.js"];

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <div className="App">

      <div className="container" >
        <Navbar language={language} />
        <div id="sobreMi" >
          <div className='containerB'>
            <button className='botton' onClick={() => switchLanguage('es')}>Es</button>
            <button  className='botton'onClick={() => switchLanguage('en')}>En</button>
          </div>
          <SobreMi language={language} texts={texts} />
        </div>

        <div id="habilidades" >
          <Habilidades habilidades={habilidades} />
        </div>
        <div id="experience">
          <Experience language={language} />
        </div>
        <div id="proyectos">
          <Proyectos language={language} />
        </div>
        <div id="redesSociales">
          <RedesSociales language={language} />
        </div>
      </div>
    </div>
  );
}

export default App;
