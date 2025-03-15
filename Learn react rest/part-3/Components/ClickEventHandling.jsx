import React from "react";

export default function BtnClick() {
  function handleMouseOver(event) {
    console.log(event.target);
  }

  function handleOnClick() {
    document.getElementById("para").style.color = "red";
  }

  return (
    <>
      <button onClick={handleOnClick}>Click me!</button>
      <p id="para" onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse harum
        placeat officiis dolore veritatis est consequatur tempora aut neque
        dolores eveniet, iure inventore nemo deleniti obcaecati eum voluptates
        cupiditate soluta!
      </p>
    </>
  );
}
