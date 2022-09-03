import React, { useEffect, useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import {
  CardAuthor,
  CardContainer,
  CardDescription,
  CardFavoriteButton,
  CardFlexContainer,
  CardHeader,
  CardTitle,
  CardType,
  CardUrl,
  FavoriteButtonContainer,
} from '.';
import { ArticleShape } from '../../contexts/MyContext';
import openInNewTab from '../../utils/urls/RedirectUrl';

type CardPropsShape = {
  article: ArticleShape;
};

function Card({ article }: CardPropsShape) {
  const [isFavorite, setIsFavorite] = useState(false);
  const addStorageArticle = (newArticle: ArticleShape) => {
    const currentStorage = JSON.parse(
      localStorage.getItem('favoritesArticles'),
    );
    localStorage.setItem(
      'favoritesArticles',
      JSON.stringify([...currentStorage, newArticle]),
    );
  };

  const removeStorageArticle = (repeatedArticle: ArticleShape) => {
    const currentStorage = JSON.parse(
      localStorage.getItem('favoritesArticles'),
    );

    const storageArticleIndex = currentStorage.findIndex(
      ({ id }) => id === repeatedArticle.id,
    );
    currentStorage.splice(storageArticleIndex, 1);
    localStorage.setItem('favoritesArticles', JSON.stringify(currentStorage));
  };

  const handleFavoriteButton = () => {
    const currentStorage = JSON.parse(
      localStorage.getItem('favoritesArticles'),
    );

    const isArticleInStorage = currentStorage.some(
      (currentArticle: ArticleShape) => currentArticle.id === article.id,
    );

    if (isArticleInStorage) {
      setIsFavorite(false);
      return removeStorageArticle(article);
    }
    setIsFavorite(true);
    return addStorageArticle(article);
  };

  const isArticleInStoraged = () => {
    const currentStorage = JSON.parse(
      localStorage.getItem('favoritesArticles'),
    );

    const isArticleInStorage = currentStorage.some(
      (currentArticle: ArticleShape) => currentArticle.id === article.id,
    );
    setIsFavorite(isArticleInStorage);
  };

  useEffect(() => {
    isArticleInStoraged();
  }, [isFavorite]);

  return (
    <CardContainer>
      <CardHeader>
        <CardFlexContainer>
          <CardTitle>{article.title}</CardTitle>
          <CardAuthor aria-label="author">{article.authors}</CardAuthor>
        </CardFlexContainer>
        <FavoriteButtonContainer>
          <CardType aria-label="type">{article.topics}</CardType>
          <CardFavoriteButton
            onClick={handleFavoriteButton}
            aria-label="button"
            type="button"
          >
            <AiOutlineStar color={isFavorite && 'yellow'} />
          </CardFavoriteButton>
        </FavoriteButtonContainer>
      </CardHeader>
      <CardFlexContainer>
        <CardDescription aria-label="description">
          {article.description}
        </CardDescription>
        <CardUrl
          onClick={() => openInNewTab(article.fulltextIdentifier)}
          aria-label="url"
        >
          {' '}
          {article.fulltextIdentifier}
        </CardUrl>
      </CardFlexContainer>
    </CardContainer>
  );
}

export default Card;
