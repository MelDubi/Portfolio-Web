import React, { useState } from 'react';  // Assure-toi d'importer useState
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  // Import de Link pour la navigation
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { styles } from '../styles'; 
import { passions } from '../constants'; 

const PassionCard = ({
  id,
  name,
  description,
  images,  // Utilisation de 'images' au lieu de 'image'
  index,
  active,
  handleClick,
}) => {
  // Sélectionner une image aléatoire parmi le tableau d'images
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      <div className="absolute top-0 left-0 z-10 bg-jetLight h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img src={randomImage} alt={name} className="absolute w-full h-full object-cover rounded-[24px]" />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3 className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
            whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
            absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0] leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
            <h2 className="font-bold sm:text-[32px] text-[24px] text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p className="text-silver sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px]">
              {description}
            </p>
            <Link
              to={`/passion/${id}`} // Navigation vers la page de détails avec l'ID de la passion
              style={{
                padding: '12px 18px',
                backgroundColor: '#555',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '16px',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '2px solid #fff',
                textDecoration: 'none', // Enlever le soulignement du lien
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#fff';
                e.target.style.color = '#333';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#555';
                e.target.style.color = '#fff';
              }}
            >
              VIEW
            </Link>
          </div>
        </>
      )}
    </motion.div>
  );
};

export const Passions = () => {
  const [active, setActive] = useState('passion-2');

  return (
    <section className="passions pt-[20px] mt-[20px] px-5 lg:px-10]" id="passions">
      <div className="text-center">
        <motion.div variants={textVariant()}>
          <p style={{ fontSize: '20px', fontStyle: 'italic', textAlign: 'center', color: '#666' }}>
            Ce que j'aime..
          </p>
          <h2 className={`${styles.sectionHeadTextLight}`} style={{ fontSize: '45px', fontWeight: '700', color: '#fff' }}>
          Passions
          </h2>
        </motion.div>

        <div className="w-full flex justify-center">
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] text-center">
            Voici quelques-unes de mes passions, qui illustrent mes intérêts, ma créativité et mon engagement envers ce qui me motive et m’inspire au quotidien.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}>
          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            {passions.map((passion, index) => (
              <PassionCard
                key={passion.id}
                index={index}
                {...passion}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}