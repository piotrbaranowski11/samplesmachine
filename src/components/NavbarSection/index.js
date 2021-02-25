import React from 'react';
import {FaBars} from 'react-icons/fa';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const NavbarSection = ({ toggle }) => {
    return (
        <>
          <Nav>
            <NavbarContainer>
             <NavLogo to="/">SAMPLESMACHINE</NavLogo>
             <MobileIcon onClick={toggle}>
               <FaBars />
             </MobileIcon>
             <NavMenu>
               <NavItem>
                 <NavLinks to="about">About</NavLinks>
               </NavItem>
                <NavItem>
                 <NavLinks to="releases">Releases</NavLinks>
               </NavItem>
                <NavItem>
                 <NavLinks to="gigs">Gigs</NavLinks>
               </NavItem>
               <NavItem>
                 <NavLinks to="shop">Shop</NavLinks>
               </NavItem>
             </NavMenu>
             <NavBtn>
              <NavBtnLink to="/booking">Mutual Attraction Booking</NavBtnLink>
             </NavBtn>
            </NavbarContainer>
          </Nav>
        
        </>
    )
}

export default NavbarSection
