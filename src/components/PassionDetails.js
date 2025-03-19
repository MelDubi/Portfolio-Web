import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { passions } from '../constants'; 

const PassionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // L'état pour gérer l'image agrandie
  const [selectedImage, setSelectedImage] = useState(null);

  const passion = passions.find((p) => p.id === id);

  if (!passion) {
    return <p className="text-center text-white text-2xl">Passion not found.</p>;
  }

  const handleBackClick = () => {
    navigate('/'); // Retour à la page principale

    setTimeout(() => {
      const section = document.getElementById('passions'); // Récupérer la section passions
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Scroll fluide vers "passions"
      }
    }, 100); // Petit délai pour assurer le bon fonctionnement
  };

  // Fonction pour ouvrir ou fermer l'image agrandie
  const handleImageClick = (image) => {
    if (selectedImage === image) {
      setSelectedImage(null); // Si l'image est déjà ouverte, on la ferme
    } else {
      setSelectedImage(image); // Sinon, on l'agrandit
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 bg-white">
      {/* Bouton de retour */}
      <button
        onClick={handleBackClick}
        style={{
          padding: '8px 14px',
          backgroundColor: '#555',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '14px',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          border: '2px solid #fff',
          textDecoration: 'none',
          position: 'absolute',
          top: '16px',
          left: '16px',
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#fff';
          e.target.style.color = '#000';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#555';
          e.target.style.color = '#fff';
        }}
      >
        back
      </button>

      {/* Titre centré avec le nom de la passion */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mt-8 text-black">{passion.name}</h1>

      {/* Détails de la passion */}
      <div className="max-w-3xl mt-6 text-center px-5">
        <p className="text-xl text-black italic">"{passion.description}"</p>
      </div>

      {/* Grille d'images avec 3 photos par ligne */}
      <div className="grid grid-cols-3 gap-4 mt-10 w-full px-5">
        {/* Utilisation de toutes les images en format portrait uniforme */}
        {passion.images && passion.images.map((image, index) => (
          <div key={index} className="col-span-1">
            <img
              src={image}
              alt={`Passion Image ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleImageClick(image)} // Ouvrir/fermer l'image
            />
          </div>
        ))}
      </div>

      {/* Affichage conditionnel de l'image agrandie */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setSelectedImage(null)} // Ferme l'image en cliquant à l'extérieur
        >
          <div>
            <img
              src={selectedImage}
              alt="Selected Passion"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PassionDetails;