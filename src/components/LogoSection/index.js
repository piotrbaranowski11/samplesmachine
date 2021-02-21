import React, {useState} from 'react';
import Video from '../../videos/videos.mp4';
import { Button } from '../ButtonElement';
import { 
    LogoContainer, 
    LogoBg, 
    VideoBg, 
    LogoContent, 
    LogoH1, 
    LogoP, 
    LogoBtnWrapper, 
    ArrowForward, 
    ArrowRight
} from './LogoElements'; 

const LogoSection = () => {
   const [hover, setHover] = useState(false)

   const onHover = () => {
       setHover(!hover)
   }

    return (
      <LogoContainer>
        <LogoBg>
          <VideoBg autoPlay loop muted src={Video} type='videos/mp4'/>
        </LogoBg>
         <LogoContent>
          <LogoH1>SAMPLESMACHINE by MUTUAL ATTRACTION</LogoH1>
          <LogoP>Make your own beat with samples recorded by Mutual Attraction from his favorites instruments</LogoP>
          <LogoBtnWrapper>
            <Button to="beats" onMouseEnter={onHover} onMouseLeave={onHover}>
              Get started and make some beats {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </LogoBtnWrapper>
        </LogoContent> 
      </LogoContainer>
    ) 
}

export default LogoSection  