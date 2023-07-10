import { useState, useRef } from "react";

import "./App.css";
function App() {
  const [display, setDisplay] = useState("");
  const audioRefs = useRef({});

  const handleKeyPress = (e) => {
    const drumPad = audioRefs.current[e.key.toUpperCase()];
    if (drumPad) {
      drumPad.play();
    }
  };

  const handlePadClick = (audioId) => {
    const audio = audioRefs.current[audioId];
    audio.currentTime = 0;
    audio.play();
    setDisplay(audioId);
  };
  return (
    <>
      <h1>Build a Drum Machine</h1>

      <div id="drum-machine" onKeyDown={handleKeyPress} tabIndex={0} autoFocus>
        <div id="display">{display}</div>
        <button className="drum-pad" id="Q" onClick={() => handlePadClick("Q")}>
          Q
          <audio
            className="clip"
            id="Q"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            ref={(audio) => (audioRefs.current["Q"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="W" onClick={() => handlePadClick("W")}>
          W
          <audio
            className="clip"
            id="W"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            ref={(audio) => (audioRefs.current["W"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="E" onClick={() => handlePadClick("E")}>
          E
          <audio
            className="clip"
            id="E"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            ref={(audio) => (audioRefs.current["E"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="A" onClick={() => handlePadClick("A")}>
          A
          <audio
            className="clip"
            id="A"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            ref={(audio) => (audioRefs.current["A"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="S" onClick={() => handlePadClick("S")}>
          S
          <audio
            className="clip"
            id="S"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            ref={(audio) => (audioRefs.current["S"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="D" onClick={() => handlePadClick("D")}>
          D
          <audio
            className="clip"
            id="D"
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            ref={(audio) => (audioRefs.current["D"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="Z" onClick={() => handlePadClick("Z")}>
          Z
          <audio
            className="clip"
            id="Z"
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            ref={(audio) => (audioRefs.current["Z"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="X" onClick={() => handlePadClick("X")}>
          X
          <audio
            className="clip"
            id="X"
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            ref={(audio) => (audioRefs.current["X"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="C" onClick={() => handlePadClick("C")}>
          C
          <audio
            className="clip"
            id="C"
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            ref={(audio) => (audioRefs.current["C"] = audio)}
          ></audio>
        </button>
      </div>
    </>
  );
}

export default App;
