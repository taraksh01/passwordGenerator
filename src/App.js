import { useState } from "react";
const App = () => {
  const [length, setLength] = useState(16);
  const [mixedCharacter, setMixedCharacter] = useState(true);
  const [includeNumbers, setIncludesNumbers] = useState(true);
  const [includeSpecialCharacters, setIncludesSpecialCharacters] =
    useState(true);
  const [password, setPassword] = useState();

  return (
    <main className="bg-gray-600 text-gray-200 h-screen w-screen">
      <div className="bg-slate-900 max-w-xl rounded-md mx-auto p-4 ">
        <h1 className="text-xl">Password Generator</h1>
        <div className="flex my-4 text-2xl">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full rounded-l-lg outline-none text-orange-500 p-2"
          />
          <button className="outline-none bg-orange-500 rounded-r-lg p-2 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="bg-orange-500 cursor-pointer accent-orange-500"
              id="length"
            />
            <label htmlFor="length">Length</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={mixedCharacter}
              onChange={() => setMixedCharacter(!mixedCharacter)}
              className="bg-orange-500 cursor-pointer accent-orange-500"
              id="mixed"
            />
            <label htmlFor="mixed">Mixed Characters</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={mixedCharacter}
              onChange={() =>
                setIncludesSpecialCharacters(!includeSpecialCharacters)
              }
              className="bg-orange-500 cursor-pointer accent-orange-500"
              id="special"
            />
            <label htmlFor="special">Special Characters</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={mixedCharacter}
              onChange={() => setIncludesNumbers(!includeNumbers)}
              className="bg-orange-500 cursor-pointer accent-orange-500"
              id="numbers"
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
