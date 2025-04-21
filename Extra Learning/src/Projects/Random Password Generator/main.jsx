import "./style.css";
import { useCallback, useEffect, useRef, useState } from "react";

export const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeNums, setIncludeNums] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nums = "0123456789";
    let specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>/?`~";

    if (includeNums) str += nums;
    if (includeSpecialChars) str += specialChars;

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length); // Use str.length here
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, includeNums, includeSpecialChars, setPassword]);

  const handleCopyPasswordToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="container">
      <h1>Random Password Generator</h1>

      <div className="password-field">
        <input type="text" value={password} ref={passwordRef} readOnly />
        <button className="copy-btn" onClick={handleCopyPasswordToClipboard}>
          copy
        </button>
      </div>

      <div className="options">
        <div className="range">
          <input
            type="range"
            min={8}
            max={18}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <span>{length}</span>
        </div>

        <div className="includeNums">
          <input
            type="checkbox"
            name="numbers"
            checked={includeNums}
            onChange={(e) => setIncludeNums(e.target.checked)}
          />
          <span>Numbers</span>
        </div>

        <div className="includeChars">
          <input
            type="checkbox"
            name="characters"
            checked={includeSpecialChars}
            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
          />
          <span>Characters</span>
        </div>
      </div>
    </div>
  );
};
