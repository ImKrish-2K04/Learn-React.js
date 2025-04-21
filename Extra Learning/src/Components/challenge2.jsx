import { useState } from "react";

export function Challenge2() {
  const [users] = useState([
    { name: "alice", age: 25 },
    { name: "bob", age: 30 },
    { name: "jenifer", age: 35 },
  ]);

  const avg =
    users.reduce((acc, currVal) => acc + currVal.age, 0) / users.length;

  return (
    <>
      <div>
        <h1>users list:</h1>
        <ul>
          <li>{`the average age of students is ${avg}`}</li>
        </ul>
      </div>
    </>
  );
}
