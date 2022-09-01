import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { FooterButton, FooterContaier } from '.';
import openInNewTab from '../../utils/urls/RedirectUrl';
import {
  MY_GITHUB_URL,
  MY_LINKEDIN_URL,
  MY_PORTFOLIO_URL,
} from '../../utils/urls/URL';

function Footer() {
  return (
    <FooterContaier>
      <FooterButton
        onClick={() => openInNewTab(MY_GITHUB_URL)}
        type="button"
        aria-label="github-button"
      >
        <AiOutlineGithub />
      </FooterButton>
      <FooterButton
        onClick={() => openInNewTab(MY_LINKEDIN_URL)}
        type="button"
        aria-label="linkedin-button"
      >
        <FaLinkedin />
      </FooterButton>
      <FooterButton
        onClick={() => openInNewTab(MY_PORTFOLIO_URL)}
        type="button"
        aria-label="portfolio-button"
      >
        <ImProfile />
      </FooterButton>
    </FooterContaier>
  );
}

export default Footer;
