import React from 'react';

const FooterSection = () => {
    return (
        <FooterContainer>
          <FooterWrap>
            <FooterLinksContainer>
              <FooterLinksWraper>
                <FooterLinkItems>
                  <FooterLinkTitle>About Me</FooterLinkTitle>
                    <FooterLink to="/signin">Facebook</FooterLink>
                    <FooterLink to="/signin">Instagram</FooterLink>
                    <FooterLink to="/signin">Soundcloud</FooterLink>
                    <FooterLink to="/signin">Spotify</FooterLink>
                    <FooterLink to="/signin">Discogs</FooterLink>
                </FooterLinkItems>
              </FooterLinksWrapper>
            </FooterLinksContainer>
          </FooterWrap>
        </FooterContainer>
        
        
    )
};

export default FooterSection