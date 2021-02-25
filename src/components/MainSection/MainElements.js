import styled from 'styled-components';

export const MainContainer = styled.div`
  background: #F8F6ED;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 900px;
  position: absolute;
  z-index: 1;
`;

export const MainBg = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom; 0;
  left: 100;
  width: 50%;
  height: 50%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0;
  padding-bottom: 60px;

`;

export const TopLine = styled.p`
  color: #55BB9A;
  font-size: 15px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 3.2rem;
  line-height: 1.1;
  font-weight: 400;
  color: #0c0c0c;
`;

export const Subtitle = styled.p`
  max-width: 500px;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 24px;
  color: #0c0c0c;
`;