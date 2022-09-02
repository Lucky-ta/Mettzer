import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Card from '../components/Card/Card';
import { CardHomeContainer } from '../components/Card';
import GlobalContainer from '../styles/Index';
import MyContext from '../contexts/MyContext';
import Loading from '../components/Loading';

function Home() {
  const { articles, isPageLoading } = useContext(MyContext);

  return (
    <GlobalContainer>
      <Header />
      <Form />
      <CardHomeContainer>
        { isPageLoading ? (<Loading>Loading...</Loading>) : (
          articles.map((article) => <Card article={article} />)
        )}

      </CardHomeContainer>
      <Footer />
    </GlobalContainer>
  );
}

export default Home;
