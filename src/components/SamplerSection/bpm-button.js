import React, { useState } from 'react';
import styled from 'styled-components';

const BPM = styled.input`
  padding: 0.75em 2em;
  outline: none;
  background-color: #F8F6ED;
  border: none;
  border-radius: 5px;
  color: #0c0c0c;
  font-size: 1em;
  margin: 0.5em;
  
`;

export default function PlayButton (initialBpm) {
  const [bpm, set] = useState(initialBpm);
  const setBpm = e => set(e.target.value);
  return [
    bpm,
    <BPM type="number" value={bpm} min="60" max="180" onChange={setBpm} />,
  ];
}
