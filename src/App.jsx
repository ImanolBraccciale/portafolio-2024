 import './App.css';
import "./styles/star"
import SobreMi from './components/AboutMe';
import RedesSociales from './components/Social';
import Proyectos from './components/Projects';
import Habilidades from './components/Abilitys';
import Experience from './components/Experience';
import Navbar from './components/NavBar';

function App() {
  const habilidades = ["JavaScript", "TypeScript", "AWS", "VPS", "MongoDB", "PostgreSQL", "Next.js", "React", "Nest.js", "Node.js"]

  return (
    <div className="App">
      <div className="container" >
      <Navbar />
        <div id="sobreMi" >
          <SobreMi />
        </div>
       
        <div id="habilidades" >
          <Habilidades habilidades={habilidades} />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="proyectos">
          <Proyectos />
        </div>
        <div id="redesSociales">
          <RedesSociales />
        </div>
      </div>
    </div>
  );
}

export default App;
