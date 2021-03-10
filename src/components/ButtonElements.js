import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#55BB9A' : '#0c0c0c')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#0c0c0c' : '#F8F6ED')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none; 
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#F8F6ED' : '#0c0c0c')}; 
  };
`;