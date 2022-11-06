import { Phase } from "./types";

export function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export function getNextPhase(phase: Phase) {
  switch (phase) {
    case "pomodoro":
      return "short-break";
    case "short-break":
      return "pomodoro";
    case "long-break":
      return "pomodoro";
  }
}

export function getPhaseDisplayName(phase: Phase) {
  switch (phase) {
    case "pomodoro":
      return "Pomodoro";
    case "short-break":
      return "Short Break";
    case "long-break":
      return "Long Break";
  }
}

export function getPhaseFavicon(phase: Phase) {
  switch (phase) {
    case "pomodoro":
      return "/clock-rose.svg";
    case "short-break":
      return "/clock-sky.svg";
    case "long-break":
      return "/clock-teal.svg";
  }
}

export function getPhaseMessage(phase: Phase) {
  switch (phase) {
    case "pomodoro":
      return "Time to work!";
    case "short-break":
      return "Time for a break!";
    case "long-break":
      return "Time for a long break!";
  }
}
