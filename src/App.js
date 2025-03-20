import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';  // Ajoute useLocation ici
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";
import { Passions } from "./components/Passions";
import { Contact } from "./components/Contact";
import PassionDetails from './components/PassionDetails'; // Nouvelle page pour afficher le détail

const AppContent = () => {
  const location = useLocation();  // Récupère la localisation actuelle de l'URL

  // Vérifie si on est sur la page des détails d'une passion
  const isPassionDetailsPage = location.pathname.startsWith('/passion/');

  return (
    <div className="App">
      {/* Masquer la navbar uniquement sur la page des détails de la passion */}
      {!isPassionDetailsPage && <NavBar />}
      
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Experiences />
            <Skills />
            <Projects />
            <Passions />
            <Contact />
          </>
        } />
        <Route path="/passion/:id" element={<PassionDetails />} /> 
      </Routes>
    </div>
  );
};

function App() {
  return (
    <AppContent />
  );
}

export default App;