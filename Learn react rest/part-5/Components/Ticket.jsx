import RandNumGen from "./TicketNum";

export default function GenerateTicket({ arr }) {
  return (
    <>
      {arr.map((num, ind) => (
        <RandNumGen num={num} key={ind} />
      ))}
    </>
  );
}
