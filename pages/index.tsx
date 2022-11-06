import classNames from "classnames";
import { useRef } from "react";
import PhaseButton from "../components/PhaseButton";
import PlayPauseButton from "../components/PlayPauseButton";
import usePomodoro from "../hooks/usePomodoro";
import { formatTime } from "../utils/helpers";

export default function Home() {
  const [{ phase, time, isRunning }, dispatch] = usePomodoro();
  const timerRef = useRef<number | null>(null);

  const year = new Date().getFullYear();

  function handlePlayPause() {
    if (isRunning) {
      dispatch({ type: "pause" });
      window.clearInterval(timerRef.current!);
      timerRef.current = null;
    } else {
      dispatch({ type: "play" });
      timerRef.current = window.setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
    }
  }

  return (
    <div
      className={classNames(
        "flex min-h-screen flex-col text-white transition-colors",
        {
          "bg-rose-700": phase === "pomodoro",
          "bg-sky-700": phase === "break",
        }
      )}
    >
      <main className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-4xl font-medium sm:text-5xl">PomoTimer</h1>
        <div className="mt-24 space-x-2">
          <PhaseButton
            forPhase="pomodoro"
            phase={phase}
            onClick={() => dispatch({ type: "switch", payload: "pomodoro" })}
          />
          <PhaseButton
            forPhase="break"
            phase={phase}
            onClick={() => dispatch({ type: "switch", payload: "break" })}
          />
        </div>
        <div className="mt-8 text-7xl sm:text-8xl">{formatTime(time)}</div>
        <PlayPauseButton
          phase={phase}
          isRunning={isRunning}
          onClick={handlePlayPause}
          className="mt-12"
        />
      </main>
      <footer className="flex justify-center p-4 text-sm">
        &copy; {year} Saleh Zaidan. All rights reserved.
      </footer>
    </div>
  );
}
