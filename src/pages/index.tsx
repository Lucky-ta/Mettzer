import React, { useContext, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Card from '../components/Card/Card';
import { CardHomeContainer } from '../components/Card';
import GlobalContainer from '../styles/Index';
import MyContext from '../contexts/MyContext';
import Loading from '../components/Loading/Loading';
import ShowMoreButton from '../components/ShowMoreButton/ShowMoreButton';

function Home() {
  const [visible, setVisible] = useState(5);
  const { articles, isPageLoading } = useContext(MyContext);

  const showMore = () => {
    setVisible(visible + 5);
  };

  return (
    <GlobalContainer>
      <Header />
      <Form />
      <CardHomeContainer>
        { isPageLoading ? (<Loading />) : (
          articles.slice(0, visible).map((article) => <Card article={article} />)
        )}
      </CardHomeContainer>
      { articles.length !== 0 && (<ShowMoreButton showMoreFunction={showMore} />) }
      <Footer />
    </GlobalContainer>
  );
}

export default Home;
