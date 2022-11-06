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
