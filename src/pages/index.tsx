import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SearchInput from '../components/SearchInput/SearchInput';

function Home() {
  return (
    <div>
      <Header />
      <SearchInput />
      <Footer />
    </div>
  );
}

export default Home;
