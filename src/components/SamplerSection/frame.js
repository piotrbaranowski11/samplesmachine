import styled from "styled-components";

const Frame = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  width: 1400px;
  height: 400px;
  background: #0c0c0c;
  text-align: center;
  justify-content: center;
`;

export default Frame;