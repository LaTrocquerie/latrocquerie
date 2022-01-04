import React from 'react';
import { useParams } from 'react-router-dom';
// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Product from '../components/Product';
// data
import home from '../data/Home';
import concept from '../data/Concept';
import abonnement from '../data/Abonnement';
import services from '../data/Services';
import echanges from '../data/Echanges';

const Pages = () => {
  const { pages } = useParams();
  const getComponent = (type, data) => {
    console.log(type);
    const component = {
      header: () => <Header data={data} />,
      logo: () => <Logo data={data} />,
      product: () => <Product data={data} />,
      footer: () => <Footer data={data} />,
    };
    return component[type]();
  };
  const createComponent = () => {
    const DetailsPages = {
      concept,
      abonnement,
      echanges,
      services,
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
