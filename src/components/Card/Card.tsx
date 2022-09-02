import React from 'react';
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

type CardPropsShape = {
  article: ArticleShape;
};

function Card({ article }: CardPropsShape) {
  return (
    <CardContainer>
      <CardHeader>
        <CardFlexContainer>
          <CardTitle>{article.title}</CardTitle>
          <CardAuthor aria-label="author">{article.authors}</CardAuthor>
        </CardFlexContainer>
        <FavoriteButtonContainer>
          <CardType aria-label="type">{article.topics}</CardType>
          <CardFavoriteButton aria-label="button" type="button">
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
