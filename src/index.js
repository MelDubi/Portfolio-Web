import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';  // <-- BrowserRouter ici

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/MD-Portfolio-Web">  {/* Ton basename pour GitHub Pages */}
    <App />
  </BrowserRouter>
);

reportWebVitals();