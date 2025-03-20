import './App.css';
import { Routes, Route } from 'react-router-dom';  // Pas besoin de BrowserRouter ici
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Experiences } from "./components/Experiences";
import { Projects } from "./components/Projects";
import { Passions } from "./components/Passions";
import { Contact } from "./components/Contact";
import PassionDetails from './components/PassionDetails'; // Nouvelle page pour afficher le détail

const AppContent = () => {
  return (
    <div className="App">
      <NavBar />
      
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