import { useState, useRef, useEffect } from "react";

import "./App.css";
function App() {
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(50);

  const audioRefs = useRef({});

  const playAudio = (audio) => {
    if (audio) {
      audio.currentTime = 0;
      audio.volume = volume / 100;
      audio.play();
      setDisplay(audio.dataset.clipname);
    }
  };

  const handleKeyPress = (e) => {
    if (power) {
      const key = e.key.toUpperCase();
      const audio = audioRefs.current[key];
      if (audio) {
        audio.volume = volume / 100;

        playAudio(audio);
        highlightButton(key);
      }
    }
  };

  const handlePadClick = (audioId) => {
    if (power) {
      const audio = audioRefs.current[audioId];
      playAudio(audio);
      // Add keyboard display effect
      const button = document.getElementById(audioId);
      button.style.opacity = 0.5;
      setTimeout(() => {
        button.style.opacity = 1;
      }, 500);
    }
  };

  const togglePower = () => {
    if (!power) {
      // Pause and reset audio
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
    }
    setPower(!power);
    setDisplay("");
  };
  const highlightButton = (key) => {
    const button = document.getElementById(key);
    if (button) {
      button.style.color = "#efefef";
      setTimeout(() => {
        button.style.color = "#000";
      }, 100);
    }
  };
  const handleVolumeChange = (event) => {
    const volumeValue = parseInt(event.target.value);
    setVolume(volumeValue);
    setDisplay(`Volume: ${volumeValue}`);
    // Update the volume for all audio elements
    Object.values(audioRefs.current).forEach((audio) => {
      audio.volume = volumeValue / 100
    })
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []); // Empty dependency array to run only once on component mount


  return (
    <>
      <h1>Build a Drum Machine</h1>

      <div id="drum-machine" onKeyDown={handleKeyPress}>
        <div id="display">{display}</div>

        <button
          className={`power-button ${power ? "on" : "off"}`}
          onClick={togglePower}
        >
          {power ? "ON" : "OFF"}
        </button>
        <div className="volume-control">
          <label htmlFor="volume">Volume:</label>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="100"
            step="1"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
        <div className="all_button">
        <button className="drum-pad" id="Q" onClick={() => handlePadClick("Q")}>
          Q
          <audio
            className="clip"
            id="Q"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            data-clipname="Heater 1"
            ref={(audio) => (audioRefs.current["Q"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="W" onClick={() => handlePadClick("W")}>
          W
          <audio
            className="clip"
            id="W"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            data-clipname="Heater 2"
            ref={(audio) => (audioRefs.current["W"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="E" onClick={() => handlePadClick("E")}>
          E
          <audio
            className="clip"
            id="E"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            data-clipname="Heater 3"
            ref={(audio) => (audioRefs.current["E"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="A" onClick={() => handlePadClick("A")}>
          A
          <audio
            className="clip"
            id="A"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            data-clipname="Heater 4"
            ref={(audio) => (audioRefs.current["A"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="S" onClick={() => handlePadClick("S")}>
          S
          <audio
            className="clip"
            id="S"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            data-clipname="Heater 5"
            ref={(audio) => (audioRefs.current["S"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="D" onClick={() => handlePadClick("D")}>
          D
          <audio
            className="clip"
            id="D"
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            data-clipname="OPEN HH"
            ref={(audio) => (audioRefs.current["D"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="Z" onClick={() => handlePadClick("Z")}>
          Z
          <audio
            className="clip"
            id="Z"
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            data-clipname="Kick n Hat"
            ref={(audio) => (audioRefs.current["Z"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="X" onClick={() => handlePadClick("X")}>
          X
          <audio
            className="clip"
            id="X"
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            data-clipname="RP4 KICK 1"
            ref={(audio) => (audioRefs.current["X"] = audio)}
          ></audio>
        </button>

        <button className="drum-pad" id="C" onClick={() => handlePadClick("C")}>
          C
          <audio
            className="clip"
            id="C"
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            data-clipname="Cev H2"
            ref={(audio) => (audioRefs.current["C"] = audio)}
          ></audio>
        </button>
</div>
        
      </div>
    </>
  );
}

export default App;
