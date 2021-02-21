import React from 'react';
import Video from '../../videos/LogoVideo.mp4';
import { LogoContainer, LogoBg, PictureBg } from './LogoElements'; 

const LogoSection = () => {
    return (
      <LogoContainer>
        <LogoBg>
          <VideoBg autoPlay loop muted src={Video} type='LogoVideo/mp4'/>
        </LogoBg>
      </LogoContainer>
    ) 
}

export default LogoSection  