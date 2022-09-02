import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import { CardHomeContainer } from '../components/Card';
import GlobalContainer from '../styles/Index';

function Favorites() {
  return (
    <GlobalContainer>
      <Header />
      <Form />
      <CardHomeContainer></CardHomeContainer>
      <Footer />
    </GlobalContainer>
  );
}

export default Favorites;
