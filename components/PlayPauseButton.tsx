import classNames from "classnames";
import React from "react";
import type { Phase } from "../utils/types";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  phase: Phase;
}

export default function PlayPauseButton({ phase, className }: Props) {
  return (
    <button
      className={classNames(
        "transition-transform hover:scale-110 active:scale-125",
        className
      )}
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-14 w-14 sm:h-16 sm:w-16"
      >
        <circle cx="32" cy="32" r="32" className="fill-white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 23.5373C22 21.636 24.0387 20.4307 25.7053 21.3467L41.092 29.8107C42.8187 30.76 42.8187 33.2413 41.092 34.1907L25.7067 42.6547C24.04 43.5707 22.0013 42.3653 22.0013 40.464V23.5373H22Z"
          className={classNames("transition-colors", {
            "fill-rose-700": phase === "pomodoro",
            "fill-sky-700": phase === "break",
          })}
        />
      </svg>
    </button>
  );
}
