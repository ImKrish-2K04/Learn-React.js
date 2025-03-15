import { useState } from "react";

export default function LudoBoard() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  const blueMoveHandler = () => {
    setMoves((prevData) => {
      // blue: moves.blue + 1,
      return { ...prevData, blue: Math.ceil(Math.random() * 6) };
    });
  };

  const yellowMoveHandler = () => {
    setMoves((prevData) => {
      // yellow: moves.yellow + 1,
      return { ...prevData, yellow: Math.ceil(Math.random() * 6) };
    });
  };

  const greenMoveHandler = () => {
    setMoves((prevData) => {
      // green: moves.green + 1,
      return { ...prevData, green: Math.ceil(Math.random() * 6) };
    });
  };

  const redMoveHandler = () => {
    setMoves((prevData) => {
      // red: moves.red + 1,
      return { ...prevData, red: Math.ceil(Math.random() * 6) };
    });
  };

  return (
    <div
      style={{
        // display: "grid",
        // gridTemplateColumns: "repeat(2, 200px)",
        // rowGap: "10px",

        display: "flex",
        gap: "20px",
        border: "2px solid white",
        borderRadius: "10px",
        padding: "10px 10px 30px",
      }}
    >
      <div>
        <p>blue moves : {moves.blue}</p>
        <button
          onClick={blueMoveHandler}
          style={{ backgroundColor: "blue", color: "black" }}
        >
          b
        </button>
      </div>
      <div>
        <p>yellow moves : {moves.yellow}</p>
        <button
          onClick={yellowMoveHandler}
          style={{ backgroundColor: "yellow", color: "black" }}
        >
          y
        </button>
      </div>
      <div>
        <p>green moves : {moves.green}</p>
        <button
          onClick={greenMoveHandler}
          style={{ backgroundColor: "green", color: "black" }}
        >
          g
        </button>
      </div>
      <div>
        <p>red moves : {moves.red}</p>
        <button
          onClick={redMoveHandler}
          style={{ backgroundColor: "red", color: "black" }}
        >
          r
        </button>
      </div>
    </div>
  );
}
