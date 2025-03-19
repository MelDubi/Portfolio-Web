import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";
import { Passions } from "./components/Passions";
import { Contact } from "./components/Contact";
import PassionDetails from './components/PassionDetails'; // Nouvelle page pour afficher le détail

const AppContent = () => {
  const location = useLocation(); // Récupère l'URL actuelle

  // Vérifie si l'URL actuelle est la page des détails (avec /passion/:id)
  const isPassionDetailsPage = location.pathname.startsWith('/passion/');

  return (
    <div className="App">
      {/* Affiche la NavBar seulement si on n'est pas sur la page des détails */}
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
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;