import { useRouter } from 'next/router';
import React from 'react';
import {
  HeaderContainer,
  HeaderButton,
  HeaderLogo,
  HeaderButtonsContainer,
} from '.';
import CompanyLogo from '../../public/Icons/mettzerLogo.png';
import Redirect from '../../utils/Redirect';

function Header() {
  const router = useRouter();
  const redirect = new Redirect(router);

  const companyUrl = 'https://www.mettzer.com/';
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <HeaderContainer>
      <HeaderLogo
        onClick={() => openInNewTab(companyUrl)}
        src={CompanyLogo.src}
      />
      <HeaderButtonsContainer>
        <HeaderButton
          onClick={() => redirect.homePage()}
          type="button"
          aria-label="home-page"
        >
          Home
        </HeaderButton>
        <HeaderButton
          onClick={() => redirect.favoritePage()}
          type="button"
          aria-label="favorite-page"
        >
          Favorites
        </HeaderButton>
      </HeaderButtonsContainer>
    </HeaderContainer>
  );
}

export default Header;
