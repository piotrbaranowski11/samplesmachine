import React, {useState} from 'react';
import Video from '../../videos/videos.mp4';
import { Button } from '../ButtonElement';
import { 
    AboutContainer, 
    AboutBg, 
    VideoBg, 
    AboutContent, 
    AboutH1, 
    AboutP, 
    AboutBtnWrapper, 
    ArrowForward, 
    ArrowRight
} from './AboutElements'; 

const AboutSection = () => {
   const [hover, setHover] = useState(false)

   const onHover = () => {
       setHover(!hover)
   }

    return (
      <AboutContainer>
        <AboutBg>
          <VideoBg autoPlay loop muted src={Video} type='videos/mp4'/>
        </AboutBg>
         <AboutContent>
          <AboutH1>SAMPLESMACHINE by MUTUAL ATTRACTION</AboutH1>
          <AboutP>Make your own beats with samples recorded by Mutual Attraction on his favorite instruments</AboutP>
          <AboutBtnWrapper>
            <Button 
            to="beats" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary="true"
            dark="true">
             Get started and make some beats {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </AboutBtnWrapper>
        </AboutContent> 
      </AboutContainer>
    ) 
};

export default AboutSection  