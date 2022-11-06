import classNames from "classnames";
import { useEffect, useRef } from "react";
import PhaseButton from "../components/PhaseButton";
import PlayPauseButton from "../components/PlayPauseButton";
import useKeydown from "../hooks/useKeydown";
import usePomodoro from "../hooks/usePomodoro";
import {
  formatTime,
  getNextPhase,
  getPhaseDisplayName,
} from "../utils/helpers";
import type { Phase } from "../utils/types";

const POMODORO_COUNT_LIMIT = 4;

export default function Home() {
  const [{ phase, time, isRunning }, dispatch] = usePomodoro();
  const timerRef = useRef<number | null>(null);
  const pomodoroCount = useRef(0);

  const year = new Date().getFullYear();

  useEffect(() => {
    if (time < 0) {
      dispatch({ type: "pause" });
      stopTimer();

      if (pomodoroCount.current === POMODORO_COUNT_LIMIT) {
        dispatch({ type: "switch", payload: "long-break" });
        pomodoroCount.current = 0;
      } else {
        dispatch({ type: "switch", payload: getNextPhase(phase) });
        if (phase === "short-break") {
          pomodoroCount.current++;
        }
      }
    }
  }, [phase, time, dispatch]);

  useKeydown(handlePlayPause, { key: " " });
  useKeydown(() => handlePhaseSwitch(getNextPhase(phase)), {
    key: " ",
    ctrlKey: true,
  });

  function stopTimer() {
    window.clearInterval(timerRef.current!);
    timerRef.current = null;
  }

  function handlePlayPause() {
    if (isRunning) {
      dispatch({ type: "pause" });
      stopTimer();
    } else {
      dispatch({ type: "play" });
      timerRef.current = window.setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
    }
  }

  function handlePhaseSwitch(forPhase: Phase) {
    if (
      confirm(
        `Are you sure you want to switch to ${getPhaseDisplayName(
          forPhase
        ).toLowerCase()}?`
      )
    ) {
      dispatch({ type: "switch", payload: forPhase });
    } else {
      dispatch({ type: "pause" });
    }
    stopTimer();
  }

  return (
    <div
      className={classNames(
        "flex min-h-screen flex-col text-white transition-colors",
        {
          "bg-rose-700": phase === "pomodoro",
          "bg-sky-700": phase === "short-break",
          "bg-teal-700": phase === "long-break",
        }
      )}
    >
      <main className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-4xl font-medium sm:text-5xl">PomoTimer</h1>
        <div className="mt-24 space-x-2">
          <PhaseButton
            forPhase="pomodoro"
            phase={phase}
            onClick={() => handlePhaseSwitch("pomodoro")}
          />
          <PhaseButton
            forPhase="short-break"
            phase={phase}
            onClick={() => handlePhaseSwitch("short-break")}
          />
          <PhaseButton
            forPhase="long-break"
            phase={phase}
            onClick={() => handlePhaseSwitch("long-break")}
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
