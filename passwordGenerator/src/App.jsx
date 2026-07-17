import { useState, useCallback, useEffect, useRef } from "react";
// we imported the 4 hooks for our functionallity 
// The core difference is that a useEffect dependency array determines when to execute side-effect logic (an action), while a useCallback dependency array determines when to recreate a function instance (a reference).

function App() {
  // declared all necessory variables
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook ( we are taking this to take reference )
  // when we want to take reference of any tag or anything then we are taking use ref and modifying it to display better ux
  const passwordRef = useRef(null);

  // for optimization we are using useCallback 
  // in useCallback we are passing the dependencies , if that dependecies make any changes then it calls
  // and also in useCallback we have memoization technique means it try to remember all things in this 
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]); // here setPassword is optional it is only for optimization 

  // the react by default works as a client side rendering
  // so we can use the window in this with help of that we can copy the pass in clipboard
  const copyPasswordToClipboard = useCallback(() => {
    if (!passwordRef.current || !password) return;

    // this will improve the ux of the user , whenever user click on the copy then this below line highligh the selected pass so user knows what he copies
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, password.length);
    // this is for to copy password in the clipboard 
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // now useEffect loads(render) the passwordGenerator() at the time of the loading the page 
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3 pt-3 text-3xl">
          Password Generator
        </h1>
        <div className="flex items-center shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-white text-black rounded-l-lg"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            type="button"
            onClick={copyPasswordToClipboard}
            className="cursor-pointer outline-none bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 font-medium transition-colors duration-200 shrink-0 rounded-r-lg"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 pb-4">
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
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
