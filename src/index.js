import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';  // Import de BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/MD-Portfolio-Web">  {/* Ajout du basename */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Si tu veux commencer à mesurer la performance dans ton app, passe une fonction
// pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoie-les à un point de terminaison d'analyse. Apprends-en plus : https://bit.ly/CRA-vitals
reportWebVitals();