// https://official-joke-api.appspot.com/random_joke
import { useEffect, useState } from "react";

function EffectHook() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchJoke() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://v2.jokeapi.dev/joke/Any");
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = await res.json();
      setJoke(data);
    } catch (err) {
      setJoke(null);
      setError(
        err instanceof Error
          ? err.message
          : "Unable to load a joke at this time.",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("https://v2.jokeapi.dev/joke/Any");
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) setJoke(data);
      } catch (err) {
        if (isMounted) {
          setJoke(null);
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load a joke at this time.",
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const isTwoPart = joke?.type === "twopart";

  return (
    <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/90 p-6 text-slate-100 shadow-xl shadow-slate-950/20">
      <button
        type="button"
        onClick={fetchJoke}
        disabled={loading}
        className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-slate-700"
      >
        {loading ? "Loading..." : "New Joke"}
      </button>

      {error ? (
        <p className="rounded-2xl bg-rose-500/10 p-4 text-sm text-rose-200">
          {error}
        </p>
      ) : null}

      {loading ? (
        <p className="text-slate-300">Fetching a joke for you…</p>
      ) : joke ? (
        <div className="space-y-4 rounded-3xl bg-slate-950/80 p-6">
          {isTwoPart ? (
            <>
              <p className="text-lg font-semibold text-white">{joke.setup}</p>
              <p className="text-base leading-7 text-slate-300">
                {joke.delivery}
              </p>
            </>
          ) : (
            <p className="text-lg font-semibold text-white">{joke.joke}</p>
          )}
        </div>
      ) : (
        <p className="text-slate-400">
          No joke loaded yet. Click the button above.
        </p>
      )}
    </div>
  );
}

export default EffectHook;
