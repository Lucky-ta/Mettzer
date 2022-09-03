import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { CardHomeContainer } from '../components/Card';
import GlobalContainer from '../styles/Index';
import Card from '../components/Card/Card';

function Favorites() {
  const [storagedArticles, setStoragedArticles] = useState([]);

  useEffect(() => {
    const currentStorage = JSON.parse(localStorage.getItem('favoritesArticles'));
    setStoragedArticles(currentStorage);
  }, []);

  return (
    <GlobalContainer>
      <Header />
      <CardHomeContainer>
        {storagedArticles.map((article) => <Card article={article} />)}
      </CardHomeContainer>
      <Footer />
    </GlobalContainer>
  );
}

export default Favorites;
