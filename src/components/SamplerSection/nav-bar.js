import React from "react";
import styled from "styled-components";


const Bar = styled.div`
  width: 1400px;
  justify-content: center;
  text-align: right;
  background: #0c0c0c;
`;


const NavBar = ({ children }) => <Bar>{children}</Bar>;

export default NavBar;