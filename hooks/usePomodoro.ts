import { useReducer } from "react";
import type { Phase } from "../utils/types";

const MIN_TO_SEC = 60;

const initialTime = {
  pomodoro: 25 * MIN_TO_SEC,
  "short-break": 5 * MIN_TO_SEC,
  "long-break": 15 * MIN_TO_SEC,
};

const initialState = {
  phase: "pomodoro" as Phase,
  time: initialTime.pomodoro,
  isRunning: false,
};

type Action =
  | { type: "switch"; payload: Phase }
  | { type: "play" }
  | { type: "pause" }
  | { type: "tick" };

function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case "switch":
      return {
        ...state,
        phase: action.payload,
        time: initialTime[action.payload],
        isRunning: false,
      };

    case "play":
      return {
        ...state,
        isRunning: true,
      };

    case "pause":
      return {
        ...state,
        isRunning: false,
      };

    case "tick":
      return {
        ...state,
        time: state.time - 1,
      };
  }
}

export default function usePomodoro() {
  return useReducer(reducer, initialState);
}
