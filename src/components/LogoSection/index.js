import React from 'react';
import Video from '../../videos/LogoVideo1.mp4';
import { LogoContainer, LogoBg, VideoBg } from './LogoElements'; 

const LogoSection = () => {
    return (
      <LogoContainer>
        <LogoBg>
          <VideoBg autoPlay loop muted src={Video} type='LogoVideo1/mp4'/>
        </LogoBg>
      </LogoContainer>
    ) 
}

export default LogoSection  