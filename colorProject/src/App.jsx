import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex-wrap justify-center flex bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-500 px-3 py-3 rounded-3xl">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="cursor-pointer outline-none px-4 rounded-full text-white text-2xl shadow-sm"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className="cursor-pointer outline-none px-4 rounded-full text-white text-2xl shadow-sm"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className="cursor-pointer outline-none px-4 rounded-full text-white text-2xl shadow-sm"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("white");
              }}
              className="cursor-pointer outline-none px-4 rounded-full text-black text-2xl shadow-sm"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => {
                setColor("olive");
              }}
              className="cursor-pointer outline-none px-4 rounded-full text-white text-2xl shadow-sm"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
