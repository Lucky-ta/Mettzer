import React, { useContext } from 'react';
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
import MyContext, { ArticleShape } from '../../contexts/MyContext';

type CardPropsShape = {
  article: ArticleShape;
};

function Card({ article }: CardPropsShape) {
  const { isFavorite, setIsFavorite } = useContext(MyContext);

  const handleFavoriteButton = () => {
    setIsFavorite(!isFavorite);
  };

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
            <AiOutlineStar />
          </CardFavoriteButton>
        </FavoriteButtonContainer>
      </CardHeader>
      <CardFlexContainer>
        <CardDescription aria-label="description">
          {article.description}
        </CardDescription>
        <CardUrl aria-label="url">
          {' '}
          {article.fulltextIdentifier}
        </CardUrl>
      </CardFlexContainer>
    </CardContainer>
  );
}

export default Card;
