import "./ToggleButton.css";
import { useState } from "react";

export const ToggleButton = () => {
  const [switchMode, setSwitchMode] = useState(true);
  const isOn = switchMode ? "on" : "off";
  const handleSwitchMode = () => {
    setSwitchMode(!switchMode);
  };

  return (
    <>
      <div
        className="switch"
        style={{ backgroundColor: `${switchMode ? "#087a08" : ""}` }}
        onClick={handleSwitchMode}
      >
        <div className={`switch-btn ${isOn}`}>
          <span className="switch-text">{isOn}</span>
        </div>
      </div>
    </>
  );
};
