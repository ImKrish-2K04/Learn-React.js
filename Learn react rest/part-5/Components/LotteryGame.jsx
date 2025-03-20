import GenerateTicket from "./Ticket";
import { useState, useEffect } from "react";
import { generateRandomValue, sumOfDigits } from "./helper";
import "./Lottery.css";

export default function Lottery({ n, winningSum }) {
  const [ticket, setTicket] = useState([]);
  const [isWinning, setIsWon] = useState(false);

  const updateTicket = () => {
    setTicket(generateRandomValue(n));
  };

  useEffect(() => {
    const sum = sumOfDigits(ticket);
    if (sum === winningSum) setIsWon(true);
    else setIsWon(false);
  }, [ticket]);

  return (
    <div>
      <h1>Lottery Game!</h1>
      <div className="showTicket">
        <GenerateTicket arr={ticket} />
      </div>
      <div className="btn">
        <button onClick={updateTicket}>Generate Ticket</button>
      </div>
      <div className="winningMsg">
        <h3>{isWinning && `Congratulations! You Won!`}</h3>
      </div>
    </div>
  );
}
