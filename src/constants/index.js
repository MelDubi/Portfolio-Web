import {
  Bolivie1,
  Bolivie2,
  Bolivie3,
  Bolivie4,
  Bolivie5,
  Bolivie6,
  Bolivie7,
  Bolivie8,
  Bolivie9,
  Bolivie10,
  Bolivie11,
  Bolivie12,
  Bolivie13,
  Bolivie14,
  Bolivie15,
  Bolivie16,
  Bolivie17,
  Bolivie18,
  Patagonie1,
  Patagonie2,
  Patagonie3,
  Patagonie4,
  Patagonie5,
  Patagonie6,
  Patagonie7,
  Patagonie8,
  Patagonie9,
  Patagonie10,
  Patagonie11,
  Patagonie12,
  Patagonie13,
  Patagonie14,
  Patagonie15,
  Patagonie16,
  Patagonie17,
  Patagonie18,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
  H8,
  H9,
  D1,
  D2,
  D3,
  D4,
  D5,
  D6,
  D7,
  D8,
  D9,
  D10,
  D11,
  D12,
  baxter,
  ensta,
  mennais,
  hillrom,
  cip,
  geii
} from '../assets';

export const experiences = [
    {
      title: 'Etudiant-Ingénieur électronique Hardware et Software',
      company_name: 'Hillrom/Baxter - Pluvigner',
      icon: hillrom,
      iconBg: '#333333',
      date: 'Septembre 2021 - Septembre 2024',
      link: 'https://www.hillrom.fr',
      description: [
        "Travail de développement sur des lits médicaux, matelas thérapeutique et lève-malade.",
        "Conception et développement de solutions pour des fonctions variées : pesage, détection de sortie de lit, transmission Wi-Fi, régulation de pression, commande de moteur, gestion d'écran tactile, communication inter-cartes.",
        "Matériel : Conception de schémas électriques, calculs, routage de PCB, documentation technique, et réparation de cartes électroniques.",
        "Logiciel : Architecture, codage, tests fonctionnels, et documentation de développement logiciel.",
        "Collaboration avec des équipes internes et externes pour proposer et valider des solutions techniques.",
        "Suivi des objectifs de coût, qualité et délai pour les projets.",
        "Participation à l'assemblage de prototypes et validation des modèles tout au long du processus de développement, de la conception à la pré-production.",
        "Développement d'interface graphique avec Qt (Widget).",
        "Analyse et mise en œuvre des technologies code-barres et RFID en milieu hospitalier : étude des normes, types de composants, coûts, et création de maquettes.",
        "Amélioration de l'enregistrement des données, de l'identification et de la surveillance des patients, ainsi que de la vérification des allergies et médicaments pour une administration des soins plus précise et efficace."
      ]
    },
    {
      title: 'Stage Ingénieur - Acquisition de données et Cloud',
      company_name: 'Baxter - Bruxelles',
      icon: baxter,
      iconBg: '#333333',
      date: 'Mai 2023 - Août 2023',
      link: 'https://www.baxter.fr/fr',
      description: [
        "Supervision de l’acquisition de données de capteurs (température, pression, oxygène dissous) sur cuves de production, avec exportation vers AWS.",
        "Programmation d'automates Siemens (Tia Portal).",
        "Analyse prédictive et traitement des données avec Python et Simca."
      ]
    },
    {
      title: 'Stage DUT - Automatisme et Supervision',
      company_name: 'CIP Automation - Lamballe',
      icon: cip,
      iconBg: '#333333',
      date: 'Avril 2021 - Mai 2021',
      link: 'https://groupe-ovalt.com/cip-automation/',
      description: [
        "Conception de schémas industriels et développement de supervision pour procédés liquides (GRAFCET).",
        "Développement de solutions pour la télémaintenance et mise à jour des IHM.",
        "Maintenance et dépannage en industrie alimentaire."
      ]
    }
  ];

  export const schoolExperiences = [
    {
      title: 'Diplôme d’ingénieur électronique en systèmes embarqués',
      company_name: 'Ecole Nationale Supérieure de Techniques Avancées Bretagne (ENSTA) - Brest',
      icon: ensta,  // Vous pouvez changer l'icône si nécessaire
      iconBg: '#333333',
      date: '2021 - 2024',
      link: 'https://www.ensta-bretagne.fr/',
      description: [
        "Formation d'ingénieur en électronique, avec une spécialisation en systèmes embarqués.",
        "Acquisition de compétences en développement matériel et logiciel pour des systèmes embarqués.",
        "Travail sur des projets en lien avec l'intégration de capteurs et la gestion de systèmes en temps réel."
      ]
    },
    {
      title: 'DUT Génie électrique et informatique industrielle',
      company_name: 'Institut Universitaire Technologique - Rennes',
      icon: geii,  // Changez l'icône selon vos préférences
      iconBg: '#333333',
      date: '2019 - 2021',
      link: 'https://iut-rennes.univ-rennes.fr/dept-GEII',
      description: [
        "Formation en génie électrique et informatique, avec une approche pratique des systèmes industriels.",
        "Développement de solutions pour l'automatisation, le contrôle et la supervision industrielle.",
        "Travail sur des systèmes embarqués et de communication industrielle."
      ]
    },
    {
      title: 'Baccalauréat Scientifique option Sciences de l’ingénieur',
      company_name: 'Lycée La Mennais - Ploërmel',
      icon: mennais,  // Changez l'icône si nécessaire
      iconBg: '#333333',
      date: '2016 - 2019',
      link: 'https://www.lycee-lamennais.fr',
      description: [
        "Baccalauréat scientifique avec spécialité en sciences de l'ingénieur.",
        "Connaissances solides en mathématiques, physique et technologie.",
        "Introduction aux concepts fondamentaux des systèmes électroniques et mécaniques."
      ]
    }
  ];

  export const passions = [
    {
      id: 'passion-1',
      name: 'Sud Lipez',
      description: 'Quelques jours dans le désert de Sel et dans le sud Lipez en Bolivie',
      images: [
        Bolivie1, Bolivie2, Bolivie3, Bolivie4, Bolivie5, 
        Bolivie6, Bolivie7, Bolivie8, Bolivie9, Bolivie10,
        Bolivie11, Bolivie12, Bolivie13, Bolivie14, Bolivie15,
        Bolivie16, Bolivie17, Bolivie18
      ]
    },
  
    {
      id: 'passion-2',
      name: 'Patagonie',
      description: 'Voyage à travers les terres les plus au sud de l\'amérique du sud en Patagonie',
      images: [
        Patagonie1, Patagonie2, Patagonie3, Patagonie4, Patagonie5, 
        Patagonie6, Patagonie7, Patagonie8, Patagonie9, Patagonie10,
        Patagonie11, Patagonie12, Patagonie13, Patagonie14, Patagonie15,
        Patagonie16, Patagonie17, Patagonie18
      ]
    },

    {
      id: 'passion-3',
      name: 'Huayhuash',
      description: 'Trek de sept jours dans la cordillère Huayhuash',
      images: [
        H1, H2, H3, H4, H5, H6, H7, H8, H9
      ]
    },

    {
      id: 'passion-4',
      name: 'Huacachina',
      description: 'Ski dans le désert au Pérou',
      images: [
        D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11, D12
      ]
    }
  ];
