import React from 'react';
import {FaFacebook, FaLinkedin, FaInstagram, FaSpotify, FaSoundcloud} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,

} from './FooterElements';

const FooterSection = () => {
    return (
        <FooterContainer>
          <FooterWrap>
            <FooterLinksContainer>
              <FooterLinksWrapper>
                <FooterLinkItems>
                  <FooterLinkTitle>About Me</FooterLinkTitle>
                    <FooterLink to="/signin">LinkedIn</FooterLink>
                    <FooterLink to="/signin">Facebook</FooterLink>
                    <FooterLink to="/signin">Instagram</FooterLink>
                    <FooterLink to="/signin">Soundcloud</FooterLink>
                    <FooterLink to="/signin">Spotify</FooterLink>
                    <FooterLink to="/signin">Discogs</FooterLink>
                </FooterLinkItems>
                 <FooterLinkItems>
                  <FooterLinkTitle>About Me</FooterLinkTitle>
                    <FooterLink to="/signin">LinkedIn</FooterLink>
                    <FooterLink to="/signin">Facebook</FooterLink>
                    <FooterLink to="/signin">Instagram</FooterLink>
                    <FooterLink to="/signin">Soundcloud</FooterLink>
                    <FooterLink to="/signin">Spotify</FooterLink>
                    <FooterLink to="/signin">Discogs</FooterLink>
                </FooterLinkItems>
                 <FooterLinkItems>
                  <FooterLinkTitle>About Me</FooterLinkTitle>
                    <FooterLink to="/signin">LinkedIn</FooterLink>
                    <FooterLink to="/signin">Facebook</FooterLink>
                    <FooterLink to="/signin">Instagram</FooterLink>
                    <FooterLink to="/signin">Soundcloud</FooterLink>
                    <FooterLink to="/signin">Spotify</FooterLink>
                    <FooterLink to="/signin">Discogs</FooterLink>
                </FooterLinkItems>
                 <FooterLinkItems>
                  <FooterLinkTitle>About Me</FooterLinkTitle>
                    <FooterLink to="/signin">LinkedIn</FooterLink>
                    <FooterLink to="/signin">Facebook</FooterLink>
                    <FooterLink to="/signin">Instagram</FooterLink>
                    <FooterLink to="/signin">Soundcloud</FooterLink>
                    <FooterLink to="/signin">Spotify</FooterLink>
                    <FooterLink to="/signin">Discogs</FooterLink>
                </FooterLinkItems>
             </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
              <SocialMediaWrap>
                <SocialLogo to='/'>
                  SAMPLESMACHINE
                </SocialLogo>
                <WebsiteRights>Piotr Baranowski © {new Date().getFullYear()},
                All rights reserved.</WebsiteRights>
                <SocialIcons>
                 <SocialIconLink href="/" target="blank" aria-label="LinkedIn">
                   <FaLinkedin />
                 </SocialIconLink>
                 <SocialIconLink href="/" target="blank" aria-label="Facebook">
                   <FaFacebook />
                 </SocialIconLink>
                 <SocialIconLink href="/" target="blank" aria-label="Instagram">
                   <FaInstagram />
                 </SocialIconLink>
                 <SocialIconLink href="/" target="blank" aria-label="Spotify">
                   <FaSpotify />
                 </SocialIconLink>
                 <SocialIconLink href="/" target="blank" aria-label="Soundcloud">
                   <FaSoundcloud />
                 </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
          </FooterWrap>
        </FooterContainer>
        
        
    )
};

export default FooterSection