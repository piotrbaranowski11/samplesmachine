import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';



export const HeaderContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 900px;
  position: relative;
  z-index: 1;

  :::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeaderBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom; 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeaderContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px, 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const HeaderH1 = styled.h1`
  color: #F8F6ED;
  font-size: 3.2rem;
  text-align: center;
  font-weight: 400;
  /* text-decoration: none; */
  

  @media screen and (max-width: 768px) {
      font-size: 35px;

  }

  @media screen and (max-width: 480px) {
      font-size: 28px;
  }
`;

export const HeaderP = styled.p`
  margin-top: 27px;
  color: #F8F6ED;
  font-size: 20px;
  text-align: center;
  max-width: 600px;

   @media screen and (max-width: 768px) {
      font-size: 24px;

  }

  @media screen and (max-width: 480px) {
      font-size: 18px;
  }

`;

export const HeaderBtnWrapper = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
 
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;