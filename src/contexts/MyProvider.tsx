/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import MyContext from './MyContext';

type MyProviderPropsShape = {
    children: React.ReactNode
}

function MyPovider({ children }: MyProviderPropsShape) {
  const [articles, setArticles] = useState([{}]);

  const data = {
    articles,
    setArticles,
  };

  return (
    <MyContext.Provider value={data}>
      { children }
    </MyContext.Provider>
  );
}

export default MyPovider;
