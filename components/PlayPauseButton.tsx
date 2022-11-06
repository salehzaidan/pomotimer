import classNames from "classnames";
import React from "react";
import type { Phase } from "../utils/types";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  phase: Phase;
  isRunning: boolean;
}

export default function PlayPauseButton({
  phase,
  isRunning,
  onClick,
  className,
}: Props) {
  return (
    <button
      onClick={onClick}
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
          d={
            isRunning
              ? "M25 23C25 22.7348 25.1054 22.4804 25.2929 22.2929C25.4804 22.1054 25.7348 22 26 22H28C28.2652 22 28.5196 22.1054 28.7071 22.2929C28.8946 22.4804 29 22.7348 29 23V41C29 41.2652 28.8946 41.5196 28.7071 41.7071C28.5196 41.8946 28.2652 42 28 42H26C25.7348 42 25.4804 41.8946 25.2929 41.7071C25.1054 41.5196 25 41.2652 25 41V23ZM35 23C35 22.7348 35.1054 22.4804 35.2929 22.2929C35.4804 22.1054 35.7348 22 36 22H38C38.2652 22 38.5196 22.1054 38.7071 22.2929C38.8946 22.4804 39 22.7348 39 23V41C39 41.2652 38.8946 41.5196 38.7071 41.7071C38.5196 41.8946 38.2652 42 38 42H36C35.7348 42 35.4804 41.8946 35.2929 41.7071C35.1054 41.5196 35 41.2652 35 41V23Z"
              : "M22 23.5373C22 21.636 24.0387 20.4307 25.7053 21.3467L41.092 29.8107C42.8187 30.76 42.8187 33.2413 41.092 34.1907L25.7067 42.6547C24.04 43.5707 22.0013 42.3653 22.0013 40.464V23.5373H22Z"
          }
          className={classNames("transition-colors", {
            "fill-rose-700": phase === "pomodoro",
            "fill-sky-700": phase === "short-break",
            "fill-teal-700": phase === "long-break",
          })}
        />
      </svg>
    </button>
  );
}
