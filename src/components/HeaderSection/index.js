import React, {useState} from 'react';
import Video from '../../videos/videos.mp4';
import { Button } from '../ButtonElements';
import { 
    HeaderContainer, 
    HeaderBg, 
    VideoBg, 
    HeaderContent, 
    HeaderH1, 
    HeaderP, 
    HeaderBtnWrapper, 
    ArrowForward, 
    ArrowRight
} from './HeaderElements'; 

const HeaderSection = () => {
   const [hover, setHover] = useState(false)

   const onHover = () => {
       setHover(!hover)
   }

    return (
      <HeaderContainer>
        <HeaderBg>
          <VideoBg autoPlay loop muted src={Video} type='videos/mp4'/>
        </HeaderBg>
         <HeaderContent>
          <HeaderH1>SAMPLESMACHINE by MUTUAL ATTRACTION</HeaderH1>
          <HeaderP>Make your own beats with samples recorded by Mutual Attraction on his favorite instruments</HeaderP>
          <HeaderBtnWrapper>
            <Button 
            to="beats" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            >
             Get started and make some beats {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeaderBtnWrapper>
        </HeaderContent> 
      </HeaderContainer>
    ) 
};

export default HeaderSection  