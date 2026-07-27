import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        {/* navbar */}
        <div className="flex items-center justify-between bg-slate-900 text-white p-4">
          <div className="font-bold">Logo</div>
          {/* desktop nav */}
          <div className="hidden sm:flex gap-4">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>

          <button
            className="sm:hidden text-xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
        {/* mobile nav */}
        {open && (
          <div className="flex flex-col items-center gap-4 bg-slate-900 text-white p-4 sm:hidden">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 gap-6 text-white text-center font-semibold text-4xl sm:text-lg">
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-300">
            Feature One
          </div>
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-300">
            Feature Two
          </div>
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-300">
            Feature Three
          </div>
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-300">
            Feature Four
          </div>
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-300">
            Feature Five
          </div>
          <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-300">
            Feature Six
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
