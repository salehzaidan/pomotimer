import { useReducer } from "react";
import type { Phase } from "../utils/types";

const initialState = {
  phase: "pomodoro" as Phase,
  time: 25 * 60,
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
