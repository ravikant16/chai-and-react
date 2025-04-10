import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copyLabel, setCopyLabel] = useState(false);

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Append additional characters based on flags
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_{}[]|?";

    // Generate the password
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length); // Corrected index range
      pass += str.charAt(char);
    }

    // Set the password
    setPassword(pass);
    setCopyLabel(false);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setCopyLabel(true);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-3xl text-center">Password Generator</h1>
      <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
        <input
          readOnly
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordClipBoard}
          className="outline-none bg-blue-700 hover:bg-blue-800 text-white px-3 py-0.5 shrink-0"
        >
          {copyLabel ? "Copied!" : "Copy!"}
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultValue={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label>Number</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultValue={charAllowed}
            id="charInput"
            onChange={(e) => setCharAllowed((prev) => !prev)}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
