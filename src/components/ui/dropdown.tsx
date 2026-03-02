import * as React from "react";
// ...existing code...

export interface DropdownProps {
  children: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  className?: string;
}

export function Dropdown({ children, open, onToggle, className }: DropdownProps) {
  return (
    <div className={`relative ${className || ""}`}>
      <button
        aria-label="Language"
        className="inline-flex items-center justify-center h-8.5 w-8.5 rounded-md bg-transparent transition-shadow hover:ring-2 hover:ring-blue-400"
        onClick={onToggle}
      >
        <img src="/globe.svg" alt="lang" width={20} height={20} />
      </button>
      {open && (
        <div className="absolute inset-e-0 mt-2 min-w-35 rounded-md bg-linear-to-br from-gray-900 to-gray-700 text-white shadow-lg border border-blue-400 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}
