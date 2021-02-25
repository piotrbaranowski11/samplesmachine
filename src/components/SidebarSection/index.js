import React from 'react';
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const SidebarSection = ({ isOpen, toggle }) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
            <SidebarLink to="releases" onClick={toggle}>Releases</SidebarLink>
            <SidebarLink to="gigs" onClick={toggle}>Gigs</SidebarLink>
            <SidebarLink to="shop" onClick={toggle}>Shop</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/booking">Mutual Attraction Booking</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
}

export default SidebarSection