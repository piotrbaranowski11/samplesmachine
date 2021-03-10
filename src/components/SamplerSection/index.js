import React from 'react';
import {
  MainContainer,
}  from './maincontainer';
import PlayerProvider from './player-provider';
import Sequencer from './sequencer';


const SamplerSection = () => {
  
  return (
    <MainContainer id='beats'>
        <PlayerProvider>
      {({ player }) => {
        if (!player) {
          return <p>loading....</p>;
        }
        return <Sequencer player={player} />;
      }}
       </PlayerProvider>
    </MainContainer>
  );
}

export default SamplerSection 