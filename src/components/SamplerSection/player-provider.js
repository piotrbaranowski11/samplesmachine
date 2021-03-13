import React, { useState, useEffect } from "react";
import * as Tone from "tone";

const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);
  
  useEffect(() => {
    const player = new Tone.Players (
      {
        TR1: "/KICK.wav",
        TR2: "/CLAP.wav",
        TR3: "/HAT1.wav",
        TR4: "/HAT2.wav",
        TR5: "/HAT3.wav",
        TR6: "/SNARE.wav",
        TR7: "/CHORD1.wav",
        TR8: "/CHORD2.wav",
        TR9: "/BASS1.wav"
        
       
      },
      () => {
        setPlayer(player);
      }
    ).toDestination();
  }, []);

  return children({ player });
};

export default PlayerProvider;
