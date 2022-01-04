const home = [
  {
    component: 'header',
    data: {
      title: 'Header',
      burger: { title: 'burger' },
      logo: {
        src: './assets/images/logo.png',
        alt: 'logo de l entreprise',
        cls: 'logo',
        url: '/home',
      },
    },
  },
  {
    component: 'logo',
    data: {
      src: './assets/images/logo.png',
      alt: 'logo de l entreprise',
      cls: 'image',
    },
  },
  {
    component: 'article',
    data: {
      titre: 'Chaque objet a une histoire',
      details: [
        {
          texte:
            'La Trocquerie est une boutique de seconde main sans affichage de prix, qui s’auto renouvelle par les échanges grâce à un système d’abonnement à la journée, au mois ou à l’année.',
        },
      ],
    },
  },
  {
    component: 'footer',
    data: {
      address: '23 rue Petite-Biesse - quartier île de Nantes',
      horaires: [
        { id: 1, horaire: 'Mercredi 10h30 - 19h00' },
        { id: 2, horaire: 'Jeudi 10h30 - 19h00' },
        { id: 3, horaire: 'Vendredi 10h30 - 19h00' },
        { id: 4, horaire: 'Samedi 10h30 - 19h00' },
      ],
    },
  },
];

export default home;
