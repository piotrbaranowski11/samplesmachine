import React from 'react';
import Video from '../../videos/videos3.mp4';
import {
    MainContainer,
    MainBg,
    VideoBg,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle
} from './MainElements';

const MainSection = ({id, topLine, headLine, description}) => {
    return (
        <>
         <MainContainer id={id}> 
           <MainBg>
            <VideoBg autoPlay loop muted src={Video} type='videos3/mp4'/>
           </MainBg>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headLine}</Heading>
                <Subtitle>{description}</Subtitle>
              </TextWrapper>
         </MainContainer>
        </>
    )
}

export default MainSection
