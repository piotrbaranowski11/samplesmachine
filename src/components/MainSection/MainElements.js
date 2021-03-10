import styled from 'styled-components';
import {FaGithub} from 'react-icons/fa';

export const MainContainer = styled.div`
  color: #F8F6ED;
  background: ${({lightBg}) => (lightBg ? '#F8F6ED' : '#0c0c0c')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const MainWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 900px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const MainRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => imgStart ? "'col2 col1'": "'col1 col2'"};
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #55BB9A;
  font-size: 20px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 400;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#0c0c0c')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#0c0c0c' : '#F8F6ED')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
`;

export const ImgWrap = styled.div`
  max-width: 1100px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const Giticon = styled(FaGithub)`
  margin-left: 8px;
  font-size: 25px;
`;
