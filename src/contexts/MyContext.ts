/* eslint-disable no-unused-vars */
import { createContext } from 'react';

export type ArticleShape = {
    id?: string;
    authors: string;
    description: string;
    title: string;
    topics : string;
    fulltextIdentifier: string
}

type MyContextDataShape = {
    articles: ArticleShape[];
    setArticles: (articles: ArticleShape[]) => void;
    isPageLoading: boolean;
    setIsPageLoading: (value: boolean) => void;
    isFavorite: boolean;
    setIsFavorite: (value: boolean) => void;
}

const initialData: MyContextDataShape = {
  articles: [{
    authors: '',
    description: '',
    title: '',
    topics: '',
    fulltextIdentifier: '',
  }],
  setArticles: () => {},
  isPageLoading: false,
  setIsPageLoading: () => {},
  isFavorite: false,
  setIsFavorite: () => {},
};

const MyContext = createContext<MyContextDataShape>(initialData);

export default MyContext;
