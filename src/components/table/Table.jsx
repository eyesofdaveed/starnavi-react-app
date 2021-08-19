import "./table.css";
import { useState, useEffect } from "react";

const Table = ({ mode, setHoverBoard }) => {
  /* 
  Create two dimensional array to store the state of each cell.
  Each cell will be represented as an object with
  key serving as an index, and value as a state of hover.
  */
  const generateBoard = (mode) => {
    const twoDimensionalArray = [];
    let counter = 1;
    for (let i = 1; i < mode; i++) {
      var row = [];
      for (let j = 1; j < mode; j++) {
        let temp = {};
        temp[counter] = false;
        row.push(temp);
        counter += 1;
      }
      twoDimensionalArray.push(row);
    }
    return twoDimensionalArray;
  };

  const [board, setBoard] = useState(generateBoard(mode));

  /* Update the board when mode changes on the parent component */
  useEffect(() => {
    setBoard(generateBoard(mode));
  }, [mode]);

  /* Update the hover board when any changes happen to the table */
  useEffect( () => {
    setHoverBoard(board);
  })

  /* Handle the hover event over the cell and update the state */
  const handleMouseEnter = (cell) => {
    setBoard(
      board.map((row) =>
        row.map((square) =>
          Object.keys(square)[0] === cell
            ? { [Object.keys(square)]: !Object.values(square)[0] }
            : { [Object.keys(square)]: Object.values(square)[0] }
        )
      )
    );
  };

  return (
    <div>
      <table>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  onMouseEnter={() => handleMouseEnter(Object.keys(cell)[0])}
                  className={Object.values(cell)[0] ? "blue" : "white"}
                >
                  {Object.values(cell)[0]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
