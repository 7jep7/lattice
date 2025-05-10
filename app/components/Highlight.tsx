import React from "react";

export default function Highlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`my-6 p-5 border-l-4 border-primary dark:border-primary-dark bg-primary/5 dark:bg-primary-dark/10 rounded-r-lg ${className}`}
    >
      {children}
    </div>
  );
}