import React from 'react';
import { Button } from '../ButtonElements';
import {
  MainContainer,
  MainWrapper,
  MainRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Giticon
} from './MainElements';


const MainSection = ({lightBg, id, imgStart, topLine, lightText, 
headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
         <MainContainer lightBg={lightBg} id={id}>
           <MainWrapper>
             <MainRow imgStart={imgStart}>
               <Column1>
                 <TextWrapper>
                   <TopLine>{topLine}</TopLine>
                   <Heading lightText={lightText}>{headLine}</Heading>
                   <Subtitle darkText={darkText}>{description}</Subtitle>
                   <BtnWrap>
                     <Button to='home'
                     smooth={true}
                     duration={500}
                     spy={true}
                     exact="true"
                    //  offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                     >{buttonLabel}
                     <Giticon></Giticon>
                     </Button>
                   </BtnWrap>
                 </TextWrapper>
               </Column1>
               <Column2>
                 <ImgWrap>
                   <Img src={img} alt={alt}/>
                 </ImgWrap>
               </Column2>
             </MainRow>
           </MainWrapper>
         
         </MainContainer>
        </>
    )
}

export default MainSection
