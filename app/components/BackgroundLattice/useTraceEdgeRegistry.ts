// useTraceEdgeRegistry.ts
// Registry system for hex edge traces (lines along hex borders)

import { useEffect, useState } from 'react';
import { useLocation } from '@remix-run/react';
import { TraceEdge } from './types';

// In-memory registry, keyed by route
const traceEdgeRegistry: Record<string, TraceEdge[]> = {};

// Called by components to declare a trace edge
export function registerTraceEdge(edge: TraceEdge) {
  const key = edgeKeyForCurrentPath(); // match route
  if (!traceEdgeRegistry[key]) traceEdgeRegistry[key] = [];

  const alreadyExists = traceEdgeRegistry[key].some(
    (e) => JSON.stringify(e) === JSON.stringify(edge)
  );

  if (!alreadyExists) {
    traceEdgeRegistry[key].push(edge);
  }
}

// Hook used by canvas renderer
export function useTraceEdgeRegistry(): TraceEdge[] {
  const location = useLocation();
  const [edges, setEdges] = useState<TraceEdge[]>([]);
  const pageKey = location.pathname;

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const allEdges = traceEdgeRegistry[pageKey] ?? [];

      const visibleEdges = allEdges.map((edge) => {
        let opacity = 0;
        let progress = 0;

        if (scrollY < edge.showFrom) {
          opacity = 0;
          progress = 0;
        } else if (scrollY >= edge.hideAfter) {
          opacity = 1;
          progress = 1;
        } else {
          progress = (scrollY - edge.showFrom) / (edge.hideAfter - edge.showFrom);
          opacity = Math.min(1, progress);
        }
        // opacity = 1
        return { ...edge, opacity, progress };
      });

      setEdges(visibleEdges);
    };

    update();
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, [pageKey]);

  return edges;
}

function edgeKeyForCurrentPath(): string {
  // fallback: static page key if used outside a component
  return typeof window !== 'undefined' ? window.location.pathname : '__static__';
}
