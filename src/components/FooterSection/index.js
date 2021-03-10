import React from 'react';
import { animateScroll as scroll} from 'react-scroll';
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

  const toggleHome = () => {
    scroll.scrollToTop();
  };

    return (
        <FooterContainer>
          <FooterWrap>
            <FooterLinksContainer>
              {/* <FooterLinksWrapper>
                <FooterLinkItems>
                  <FooterLinkTitle>About Me</FooterLinkTitle>
                    <FooterLink to="/signin">LinkedIn</FooterLink>
                    <FooterLink to="/signin">Facebook</FooterLink>
                    <FooterLink to="/signin">Instagram</FooterLink>
                    <FooterLink to="/signin">Soundcloud</FooterLink>
                    <FooterLink to="/signin">Spotify</FooterLink>
                    <FooterLink to="/signin">Discogs</FooterLink>
                </FooterLinkItems>
             </FooterLinksWrapper> */}
            </FooterLinksContainer>
            <SocialMedia>
              <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                  SAMPLESMACHINE
                </SocialLogo>
                <WebsiteRights>Piotr Baranowski © {new Date().getFullYear()} Warszawa,
                All rights reserved.</WebsiteRights>
                <SocialIcons>
                 <SocialIconLink href="//www.linkedin.com/in/piotr-baranowski-042679200" target="blank" aria-label="LinkedIn">
                   <FaLinkedin />
                 </SocialIconLink>
                 <SocialIconLink href="//www.facebook.com/realmutualattraction" target="blank" aria-label="Facebook">
                   <FaFacebook />
                 </SocialIconLink>
                 <SocialIconLink href="//www.instagram.com/mutual_attraction" target="blank" aria-label="Instagram">
                   <FaInstagram />
                 </SocialIconLink>
                 <SocialIconLink href="/" target="blank" aria-label="Spotify">
                   <FaSpotify />
                 </SocialIconLink>
                 <SocialIconLink href="//www.soundcloud.com/mutualattractionwarsaw" target="blank" aria-label="Soundcloud">
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