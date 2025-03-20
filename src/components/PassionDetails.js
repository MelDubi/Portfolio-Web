import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { passions } from '../constants';

const PassionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const passion = passions.find((p) => p.id === id);

  if (!passion) {
    return <p className="text-center text-white text-2xl">Passion not found.</p>;
  }

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById('passions');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleImageClick = (image) => {
    setSelectedImage(selectedImage === image ? null : image);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 bg-white">
      {/* Bouton de retour */}
      <button
        onClick={handleBackClick}
        className="absolute top-4 left-4 px-3 py-2 bg-gray-700 text-white font-bold text-sm rounded-md border-2 border-white transition hover:bg-white hover:text-black"
      >
        Back
      </button>

      {/* Titre */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mt-8 text-black">{passion.name}</h1>

      {/* Description */}
      <div className="max-w-3xl mt-6 text-center px-5">
        <p className="text-xl text-black italic">"{passion.description}"</p>
      </div>

      {/* Grille d'images responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 w-full px-5">
        {passion.images && passion.images.map((image, index) => (
          <div key={index} className="col-span-1">
            <img
              src={image}
              alt={`Passion Image ${index + 1}`}
              className="w-full h-[300px] object-cover rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      {/* Image agrandie */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Selected Passion" className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
};

export default PassionDetails;