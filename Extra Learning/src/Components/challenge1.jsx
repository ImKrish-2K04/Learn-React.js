import { useState } from "react";

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "Angels", age: 45 },
];

export function DerivedState() {
  // the state handler was not needed here, so we haven't declared it!
  const [userList] = useState(users);

  /* return (
    <>
      <div className="main-div">
        <h1>users list:</h1>
        <ul>
          {users.map((user) => (
            <li>{`${user.name} - ${user.age} yrs old`}</li>
          ))}
        </ul>
      </div>
    </>
  ); */

  return (
    <>
      <div className="main-div">
        <h1>users list:</h1>
        <ul>
          {userList.map((value, ind) => (
            <li key={ind}>{`${value.name} - ${value.age} yrs old`}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
