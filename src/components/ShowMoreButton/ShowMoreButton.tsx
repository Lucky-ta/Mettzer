import React from 'react';
import ShowMoreButtonElement from '.';

type ShowMoreButtonPropsShape = {
  showMoreFunction: () => void;
};

function ShowMoreButton({ showMoreFunction }: ShowMoreButtonPropsShape) {
  return (
    <ShowMoreButtonElement onClick={showMoreFunction} type="button">
      Show more
    </ShowMoreButtonElement>
  );
}

export default ShowMoreButton;
