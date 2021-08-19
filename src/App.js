import "./App.css";
import HoverSquares from "./components/hoverSquares/HoverSquares";
import Modes from "./components/mode/Modes";
import Table from "./components/table/Table";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("");
  const [hoverBoard, setHoverBoard] = useState([]);

  /* Pass to the display board the mode that was chosen in Modes component */
  const passModeToTable = (selectedMode) => {
    selectedMode && setMode(parseInt(selectedMode) + 1);
  };

  return (
    <div className="appWrapper">
      <div className="container">
        <div className="leftColumn">
          <Modes handleStart={passModeToTable} />
          {mode && mode !== 0 && (
            <Table mode={mode} setHoverBoard={setHoverBoard} />
          )}
        </div>
        <HoverSquares mode={mode} hoverBoard={hoverBoard} />
      </div>
    </div>
  );
}

export default App;
