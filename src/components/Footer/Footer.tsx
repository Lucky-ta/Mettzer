import React from 'react';
import { FooterButton, FooterContaier } from '.';

function Footer() {
  return (
    <FooterContaier>
      <FooterButton type="button" aria-label="github-button" />
      <FooterButton type="button" aria-label="linkedin-button" />
      <FooterButton type="button" aria-label="portfolio-button" />
    </FooterContaier>
  );
}

export default Footer;
