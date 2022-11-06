import classNames from "classnames";
import React from "react";
import { getPhaseDisplayName } from "../utils/helpers";
import type { Phase } from "../utils/types";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  forPhase: Phase;
  phase: Phase;
}

export default function PhaseButton({ forPhase, phase, onClick }: Props) {
  return (
    <button
      disabled={phase === forPhase}
      onClick={onClick}
      className={classNames(
        "rounded px-3 py-2 font-medium uppercase transition-colors duration-75",
        {
          "enabled:hover:bg-rose-800 disabled:text-rose-300":
            phase === "pomodoro",
          "enabled:hover:bg-sky-800 disabled:text-sky-300":
            phase === "short-break",
          "enabled:hover:bg-teal-800 disabled:text-teal-300":
            phase === "long-break",
        }
      )}
    >
      {getPhaseDisplayName(forPhase)}
    </button>
  );
}
