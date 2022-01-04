import React from 'react';
import { useParams } from 'react-router-dom';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import ArticleProjet from '../components/ArticleProjet';
import Abonnement from '../components/Abonnement';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Echange from '../components/Echange';

// data
import home from '../data/Home';
import concept from '../data/Concept';
import abonnement from '../data/Abonnement';
import services from '../data/Services';
import contact from '../data/Contact';
import echange from '../data/Echange';

const Pages = () => {
  const { pages } = useParams();
  const getComponent = (type, data) => {
    console.log(type);
    const component = {
      header: () => <Header data={data} />,
      logo: () => <Logo data={data} />,
      footer: () => <Footer data={data} />,
      articleProjet: () => <ArticleProjet data={data} />,
      abonnement: () => <Abonnement data={data} />,
      contact: () => <Contact data={data} />,
      services: () => <Services data={data} />,
      echange: () => <Echange data={data} />,
    };
    return component[type]();
  };
  const createComponent = () => {
    const DetailsPages = {
      concept,
      abonnement,
      contact,
      services,
      echange,
    };
    const DetailsComp = DetailsPages[pages] || home;

    const res = DetailsComp.map((comp) =>
      getComponent(comp.component, comp.data)
    );
    console.log(res);
    return res;
  };
  return <div>{createComponent()} </div>;
};

export default Pages;
