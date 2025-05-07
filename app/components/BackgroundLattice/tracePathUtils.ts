import { TracePath, TraceEdge } from './types';

export function expandTracePath(path: TracePath): TraceEdge[] {
  const { id, hex, edges, showFrom, step, hold, mode, color } = path;

  return edges.map((edge, i) => {
    const edgeStart = showFrom + i * step;
    const edgeEnd = edgeStart + step;

    if (mode === 'appear') {
      return {
        at: hex,
        edge,
        showFrom: edgeStart,
        hideAfter: Infinity, // never disappears
        color,
        opacity: 0,
        progress: 0,
        pathId: id,
      };
    }

    if (mode === 'flash') {
      return {
        at: hex,
        edge,
        showFrom: edgeStart,
        hideAfter: edgeEnd + hold,
        color,
        opacity: 0,
        progress: 0,
        pathId: id,
      };
    }

    if (mode === 'trace') {
      const fadeOutStart = showFrom + edges.length * step + hold;
      return {
        at: hex,
        edge,
        showFrom: edgeStart,
        hideAfter: fadeOutStart,
        color,
        opacity: 0,
        progress: 0,
        pathId: id,
      };
    }

    throw new Error(`Unknown TracePath mode: ${mode}`);
  });
}
