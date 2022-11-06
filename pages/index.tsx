import classNames from "classnames";
import { useState } from "react";
import PhaseButton from "../components/PhaseButton";
import PlayPauseButton from "../components/PlayPauseButton";
import type { Phase } from "../utils/types";

export default function Home() {
  const [phase, setPhase] = useState<Phase>("pomodoro");

  const year = new Date().getFullYear();

  function handlePhaseChange(forPhase: Phase) {
    setPhase(forPhase);
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
            onClick={() => handlePhaseChange("pomodoro")}
          />
          <PhaseButton
            forPhase="break"
            phase={phase}
            onClick={() => handlePhaseChange("break")}
          />
        </div>
        <div className="mt-8 text-7xl sm:text-8xl">25:00</div>
        <PlayPauseButton phase={phase} className="mt-12" />
      </main>
      <footer className="flex justify-center p-4 text-sm">
        &copy; {year} Saleh Zaidan. All rights reserved.
      </footer>
    </div>
  );
}
