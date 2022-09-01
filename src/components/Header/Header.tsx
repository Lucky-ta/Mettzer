import React from 'react';
import { HeaderContainer, HeaderButton } from '.';

function Header() {
  return (
    <HeaderContainer>
      <h1>Mettzer</h1>
      <div>
        <HeaderButton type="button" aria-label="home-page" />
        <HeaderButton type="button" aria-label="favorite-page" />
      </div>
    </HeaderContainer>
  );
}

export default Header;
