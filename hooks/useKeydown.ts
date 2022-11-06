import { useEffect } from "react";

interface UseKeydownOptions {
  key: string;
  ctrlKey?: boolean;
}

export default function useKeydown(
  callback: (event: KeyboardEvent) => void,
  { key, ctrlKey = false }: UseKeydownOptions
) {
  useEffect(() => {
    function handler(event: KeyboardEvent) {
      if (event.key === key && event.ctrlKey === ctrlKey) {
        callback(event);
      }
    }

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [callback, key, ctrlKey]);
}
