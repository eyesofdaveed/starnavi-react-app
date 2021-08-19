import React from "react";
import "./hoverSquares.css";

/* 
This component displays the position of active cells on the hover board.
It maps cells which has true value and gets their key (index). 
Based on the chosen mode it just calculates the position of each active cell  
*/
const HoverSquares = ({ mode, hoverBoard }) => {
  mode = mode - 1;
  return (
    <div>
      {hoverBoard.map((row) =>
        row.map(
          (cell, cellIndex) =>
            Object.values(cell)[0] && (
              <h3 key={cellIndex} className="hoverBoardDisplay">
                Row {Math.ceil(Object.keys(cell)[0] / mode)} Col{" "}
                {Object.keys(cell)[0] % mode === 0
                  ? mode
                  : Object.keys(cell)[0] % mode}
              </h3>
            )
        )
      )}
    </div>
  );
};

export default HoverSquares;
