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
import openInNewTab from '../../utils/urls/RedirectUrl';
import { COMPANY_URL } from '../../utils/urls/URL';

function Header() {
  const router = useRouter();
  const redirect = new Redirect(router);

  return (
    <HeaderContainer>
      <HeaderLogo
        onClick={() => openInNewTab(COMPANY_URL)}
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
