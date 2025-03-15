import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setLikeState] = useState(true);

  function handleLike() {
    isLiked ? setLikeState(false) : setLikeState(true);
  }

  return (
    <div onClick={handleLike} style={{ display: "flex", gap: "5px" }}>
      <p>please like</p>
      <p>:</p>
      <p>
        {isLiked ? (
          <i
            className="fa-solid fa-heart"
            style={{
              transition: "all 0.2s linear",
              color: "red",
              cursor: "pointer",
              filter: "drop-shadow(0 0 1px red)",
              textShadow: "0 0 10px orangered",
            }}
          ></i>
        ) : (
          <i
            className="fa-regular fa-heart"
            style={{ cursor: "pointer", transition: "all 0.2s linear" }}
          ></i>
        )}
      </p>
    </div>
  );
}
