import styled from "styled-components";
import { darken } from "polished";

const getBackground = (activated, triggered) => {
  switch (true) {
    case activated && triggered:
      return darken(0.0, "#55BB9A");
    case activated && !triggered:
      return "#55BB9A";
    case !activated && triggered:
      return '#cfe0cc';
    default:
      return "#f9f9f9";
  }
};

const Cell = styled.div.attrs(({ activated, triggered }) => ({
  style: {
    background: getBackground(activated, triggered)
  }
}))`
  border-radius: 10px;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  margin: 2px;
`;

export default Cell;
