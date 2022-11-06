import React from "react";

export default function PlayPauseButton({
  className,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={className}>
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
          className="fill-rose-700"
        />
      </svg>
    </button>
  );
}
