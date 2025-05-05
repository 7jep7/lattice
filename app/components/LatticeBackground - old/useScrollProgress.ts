export function useScrollProgress(start: number, end: number): () => number {
  return () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
    return progress; // Returns a value between 0 and 1
  };
}