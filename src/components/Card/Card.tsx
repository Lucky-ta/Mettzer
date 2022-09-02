import React from "react";
import { AiOutlineStar } from "react-icons/ai";
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
} from ".";

function Card() {
  return (
    <CardContainer>
      <CardHeader>
        <CardFlexContainer>
          <CardTitle>HIV</CardTitle>
          <CardAuthor>Lucas</CardAuthor>
        </CardFlexContainer>
        <FavoriteButtonContainer>
          <CardType>{`Type: ${'Search'}`}</CardType>
          <CardFavoriteButton type="button">
            <AiOutlineStar />
          </CardFavoriteButton>
        </FavoriteButtonContainer>
      </CardHeader>
      <CardFlexContainer>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          voluptatem perspiciatis nam quam? Aspernatur at cum, aut fugit
          suscipit iure labore temporibus tenetur ut! Sed sequi debitis vel est
          a!
        </CardDescription>
        <CardUrl>www.google.com</CardUrl>
      </CardFlexContainer>
    </CardContainer>
  );
}

export default Card;
