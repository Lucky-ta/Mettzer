import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Card from '../components/Card/Card';
import { CardHomeContainer } from '../components/Card';
import GlobalContainer from '../styles/Index';

function Home() {
  return (
    <GlobalContainer>
      <Header />
      <Form />
      <CardHomeContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardHomeContainer>
      <Footer />
    </GlobalContainer>
  );
}

export default Home;
