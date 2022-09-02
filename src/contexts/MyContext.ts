import { createContext } from 'react';

export type ArticleShape = {
    authors: string;
    description: string;
    title: string;
    type: string;
    urls: string
}

type MyContextDataShape = {
    articles: ArticleShape[],
    setArticles: () => void,
}

const initialData: MyContextDataShape = {
  articles: [{
    authors: '',
    description: '',
    title: '',
    type: '',
    urls: '',
  }],
  setArticles: () => {},

};

const MyContext = createContext<MyContextDataShape>(initialData);

export default MyContext;
