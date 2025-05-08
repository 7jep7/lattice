// useTraceEdgeRegistry.ts
// Registry system for hex edge traces (lines along hex borders)

import { useEffect, useState } from 'react';
import { useLocation } from '@remix-run/react';
import { TraceEdge } from './VertexTracePath';

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

export function getTraceProgress(edge: TraceEdge, scrollY: number): number {
  if (scrollY < edge.startAnimationIn) return 0;
  if (scrollY < edge.endAnimationIn) {
    return (scrollY - edge.startAnimationIn) / (edge.endAnimationIn - edge.startAnimationIn);
  }
  if (scrollY < edge.startAnimationOut) return 1;
  if (scrollY < edge.endAnimationOut) {
    return 1 - (scrollY - edge.startAnimationOut) / (edge.endAnimationOut - edge.startAnimationOut);
  }
  return 0;
}

export function getFadeOpacity(edge: TraceEdge, scrollY: number): number {
  if (scrollY < edge.startAnimationIn) return 0;
  if (scrollY < edge.endAnimationIn) {
    return ((scrollY - edge.startAnimationIn) / (edge.endAnimationIn - edge.startAnimationIn)) * edge.targetOpacity;
  }
  if (scrollY < edge.startAnimationOut) return edge.targetOpacity;
  if (scrollY < edge.endAnimationOut) {
    return ((edge.endAnimationOut - scrollY) / (edge.endAnimationOut - edge.startAnimationOut)) * edge.targetOpacity;
  }
  return 0;
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
        const progress = getTraceProgress(edge, scrollY); // for 'trace' and 'flash'
        const opacity = edge.targetOpacity !== undefined
          ? getFadeOpacity(edge, scrollY)
          : 1;
      
        return { ...edge, progress, opacity };
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
