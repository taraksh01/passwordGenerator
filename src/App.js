import { useCallback, useEffect, useRef, useState } from "react";
const App = () => {
  const [length, setLength] = useState(16);
  const [mixedCharacter, setMixedCharacter] = useState(true);
  const [includeNumbers, setIncludesNumbers] = useState(true);
  const [includeSpecialCharacters, setIncludesSpecialCharacters] =
    useState(true);
  const [password, setPassword] = useState();
  const passwordRef = useRef(password);
  const generatePassword = useCallback(() => {
    let generatedPassword = "";
    let characters = "abcdefghijklmnopqrstuvwxyz";
    if (mixedCharacter) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) characters += "0123456789";
    if (setIncludesNumbers) characters += "~!@#$%^&*()-+{}[]/|.,;?=_";

    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(
        Math.round(Math.random() * characters.length)
      );
    }

    setPassword(generatedPassword);
  }, [length, mixedCharacter, includeNumbers, includeSpecialCharacters]);

  const copyPassoword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, mixedCharacter, includeNumbers, includeSpecialCharacters]);

  return (
    <main className="bg-gray-500 text-gray-200 h-screen w-screen">
      <div className="bg-slate-900 max-w-xl rounded-md mx-auto p-4">
        <h1 className="text-2xl text-orange-500 flex justify-center">
          Password Generator
        </h1>
        <div className="flex my-4 text-xl">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-full rounded-l-lg outline-none text-orange-500 bg-gray-200 p-2 selection:bg-orange-500 selection:text-gray-200"
          />
          <button
            className="outline-none bg-orange-500 rounded-r-lg p-2 shrink-0"
            onClick={copyPassoword}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={6}
              max={30}
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
