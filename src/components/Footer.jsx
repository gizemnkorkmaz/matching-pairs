import React from "react";
import styled from "styled-components";

import data from "../data.json";

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 0.2rem;
  margin: 0.2rem;
`;

const LinksContainer = styled.div``;

const Link = styled.a``;

function Footer() {
  return (
    <FooterStyled>
      <LinksContainer>
        <Link href="https://github.com/gizemnkorkmaz" target="_blank">
          <Logo src={data.githubIcon.src} alt="github-icon" />
        </Link>
        <Link href="https://twitter.com/gizemnkorkmaz" target="_blank">
          <Logo src={data.twitterIcon.src} alt="twitter-icon" />
        </Link>
      </LinksContainer>
    </FooterStyled>
  );
}

export default Footer;
