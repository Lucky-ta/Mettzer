import React from 'react';
import { HeaderContainer, HeaderButton } from '.';

function Header() {
  return (
    <HeaderContainer>
      <h1>Mettzer</h1>
      <div>
        <HeaderButton type="button" aria-label="home-page">
          Home
        </HeaderButton>
        <HeaderButton type="button" aria-label="favorite-page">
          Favorites
        </HeaderButton>
      </div>
    </HeaderContainer>
  );
}

export default Header;
