import { useState, useEffect } from "react";
import axios from "axios";
import Mode from "./Mode";
import "./mode.css";

const Modes = ({ handleStart }) => {
  /* 
  Modes stores the options from the server 
  SelectedMode stores the option selected by an user
  */
  const [modes, setModes] = useState([]);
  const [selectedMode, setSelectedMode] = useState("");

  /* 
  Get request from the server with mode options and 
  store them in modes state as an array of objects 
  */
  useEffect(() => {
    axios
      .get("https://demo1030918.mockable.io/")
      .then((res) => {
        let myData = Object.entries(res.data).map((key) => ({
          [key[0]]: key[1],
        }));
        setModes(myData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mode">
      <select
        value={!selectedMode ? "Pick Mode" : selectedMode}
        onChange={(e) => setSelectedMode(e.target.value)}
        className="modeSelect"
      >
        <option defaultValue value="0">
          Pick Mode
        </option>
        {modes.map((mode) => (
          <Mode mode={mode} key={Object.keys(mode)[0]} />
        ))}
      </select>
      {/* Send to the parent the mode selected */}
      <button
        className="submitModeButton"
        onClick={() => handleStart(selectedMode)}
      >
        START
      </button>
    </div>
  );
};

export default Modes;
