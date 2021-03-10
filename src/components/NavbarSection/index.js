import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
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
  
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

   useEffect (() => {
     window.addEventListener('scroll', changeNav)
   }, []);

   const toggleHome = () => {
     scroll.scrollToTop();
   };

     return (
        <>
          <Nav scrollNav={scrollNav}>
            <NavbarContainer>
             <NavLogo to="/" onClick={toggleHome}>SAMPLESMACHINE</NavLogo>
             <MobileIcon onClick={toggle}>
               <FaBars />
             </MobileIcon>
             <NavMenu>
               <NavItem>
                 <NavLinks to="about"
                 smooth={true}
                 duration={500}
                 spy={true}
                 exact='true'
                 >About</NavLinks>
               </NavItem>
                <NavItem>
                 <NavLinks to="releases">Releases</NavLinks>
               </NavItem>
                <NavItem>
                 <NavLinks to="gigs">Gigs</NavLinks>
               </NavItem>
               <NavItem>
                 <NavLinks to="signup">Sign Up</NavLinks>
               </NavItem>
             </NavMenu>
             <NavBtn>
              <NavBtnLink to="/signin">SIGN IN</NavBtnLink>
             </NavBtn>
            </NavbarContainer>
          </Nav>
        
        </>
    )
}

export default NavbarSection
