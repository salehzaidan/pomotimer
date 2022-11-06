import React from "react";

export default function Button({
  disabled,
  children,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      disabled={disabled}
      className="px-3 py-2 font-medium uppercase disabled:text-rose-300"
    >
      {children}
    </button>
  );
}
