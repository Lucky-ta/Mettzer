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

function Card() {
  return (
    <CardContainer>
      <CardHeader>
        <CardFlexContainer>
          <CardTitle>HIV</CardTitle>
          <CardAuthor aria-label="author">Lucas</CardAuthor>
        </CardFlexContainer>
        <FavoriteButtonContainer>
          <CardType aria-label="type">{`Type: ${'Search'}`}</CardType>
          <CardFavoriteButton aria-label="button" type="button">
            <AiOutlineStar />
          </CardFavoriteButton>
        </FavoriteButtonContainer>
      </CardHeader>
      <CardFlexContainer>
        <CardDescription aria-label="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          voluptatem perspiciatis nam quam? Aspernatur at cum, aut fugit
          suscipit iure labore temporibus tenetur ut! Sed sequi debitis vel est
          a!
        </CardDescription>
        <CardUrl aria-label="url">www.google.com</CardUrl>
      </CardFlexContainer>
    </CardContainer>
  );
}

export default Card;
