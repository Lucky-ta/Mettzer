/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';

type MyProviderPropsShape = {
    children: React.ReactNode
}

function MyPovider({ children }: MyProviderPropsShape) {
  const [articles, setArticles] = useState([]);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const data: any = {
    articles,
    setArticles,
    isPageLoading,
    setIsPageLoading,
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sotragedFavorites = localStorage.getItem('favoritesArticles');
      if (!sotragedFavorites) {
        localStorage.setItem('favoritesArticles', JSON.stringify([]));
      }
    }
  });

  return (
    <MyContext.Provider value={data}>
      { children }
    </MyContext.Provider>
  );
}

export default MyPovider;
