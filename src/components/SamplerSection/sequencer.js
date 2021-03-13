import React, { useState, useEffect } from "react";
import Grid from "./grid";
import Bar from "./nav-bar";
import PlayButton from "./play-button";
import Logo from "./logo";
import useBPM from "./bpm-button";
import * as Tone from "tone"



const steps = 32;
const initialCellState = { triggered: false, activated: false };
const lineMap = ["TR1", "TR2", "TR3", "TR4", "TR5", "TR6", "TR7", "TR8", "TR9", "TR10"];
const initialState = [
  new Array(32).fill(initialCellState),
  new Array(32).fill(initialCellState),
  new Array(32).fill(initialCellState),
  new Array(32).fill(initialCellState),
  new Array(32).fill(initialCellState),
  new Array(32).fill(initialCellState),
  new Array(32).fill(initialCellState),
  new Array(32).fill(initialCellState),
  new Array(32).fill(initialCellState),
  new Array(32).fill(initialCellState)
];



const Sequencer = ({ player }) => {
  const [sequence, setSequence] = useState(initialState);
  const [playing, setPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [bpm, bpmSelector] = useBPM(110);

  const toggleStep = (line, step) => {
    const sequenceCopy = [...sequence];
    const { triggered, activated } = sequenceCopy[line][step];
    sequenceCopy[line][step] = { triggered, activated: !activated };
    setSequence(sequenceCopy);
  };

  const nextStep = time => {
    for (let i = 0; i < sequence.length; i++) {
      for (let j = 0; j < sequence[i].length; j++) {
        const { triggered, activated } = sequence[i][j];
        sequence[i][j] = { activated, triggered: j === time };
        if (triggered && activated) {
          player.player(lineMap[i]).start();
        }
      }
    }
    setSequence(sequence);
  };

  

  useEffect(
    () => {
      console.log(bpm)
      Tone.Transport.bpm.value = parseInt(bpm)
    },
    [bpm]
    
    );

    useEffect(
      () => {
        if (playing) {
          Tone.Transport.start();
        } else {
          Tone.Transport.stop();
          setCurrentStep(0);
        }
      },
      [playing]
    );


 useEffect(() => {
    const timer = setTimeout(() => {
      if (playing) {
        setCurrentStep((currentStep + 1) % steps);
        nextStep(currentStep);
      }
    }, 100 + Math.random() * 20);
    return () => {
      clearTimeout(timer);
    };
  }, [currentStep, playing]);

  

  return (
    <>
      <Bar>
         <Logo>SAMPLESMACHINE</Logo>
         {bpmSelector}
         <PlayButton playing={playing} onClick={() => setPlaying(!playing)} />
         <Grid sequence={sequence} toggleStep={toggleStep} />
      </Bar>
    </>
  );
};

export default Sequencer;
