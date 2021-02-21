import React from 'react';
import Video from '../../videos/videos.mp4';
import { LogoContainer, LogoBg, VideoBg } from './LogoElements'; 

const LogoSection = () => {
    return (
      <LogoContainer>
        <LogoBg>
          <VideoBg autoPlay loop muted src={Video} type='videos/mp4'/>
        </LogoBg>
         {/* <LogoContent>
          <LogoH1>SAMPLESMACHINE by MUTUAL ATTRACTION</LogoH1>
          <LogoP>Make some beats with Mutual Attraction samples</LogoP>
          <LogoBtnWrapper>
            <Button to="beats">
              Get started and make some beats {hover ? <ArrowForward /> : ArrowRight />}
            </Button>
          </LogoBtnWrapper>
        </LogoContent>  */}
      </LogoContainer>
    ) 
}

export default LogoSection  