// here we use simple useState 

import { useState } from "react";

function StateHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  function addValue() {
    setCount(count + 1);
  }
  function subtractValue() {
    setCount(count - 1);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-8">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60">
        <h2 className="text-2xl font-semibold text-slate-900 text-center">
          Tailwind State Hook Demo
        </h2>
        <p className="mt-2 text-center text-slate-500">
          Type your name, then update the counter with the buttons below.
        </p>

        <div className="mt-8 space-y-6">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Your Name
            </span>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="mt-2 block w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
            />
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-3 sm:gap-4">
              <button
                className="flex-1 rounded-2xl bg-green-600 px-4 py-3 text-white shadow-sm transition duration-200 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={addValue}
              >
                Add +1
              </button>
              <button
                className="flex-1 rounded-2xl bg-slate-200 px-4 py-3 text-slate-800 transition duration-200 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
                onClick={subtractValue}
              >
                Subtract -1
              </button>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-slate-700 shadow-sm">
              <span className="block text-sm text-slate-500">
                Current count
              </span>
              <span className="mt-1 block text-3xl font-semibold text-slate-900">
                {count}
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-center text-slate-700 shadow-sm">
            {name ? (
              <p className="text-base">
                Hello{" "}
                <span className="font-semibold text-slate-900">{name}</span>,
                your current count is{" "}
                <span className="font-semibold text-slate-900">{count}</span>.
              </p>
            ) : (
              <p className="text-base text-slate-500">
                Enter your name to personalize the message.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StateHook;
