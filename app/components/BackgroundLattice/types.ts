// types.ts
// Shared types used across the BackgroundLattice system

export type TracePathMode = 'appear' | 'flash' | 'trace';


export interface HexCoord {
    x: number;
    y: number;
}

/**
 * Represents a directed edge on the hex lattice.
 * - `at`: the hex the edge is drawn on (hex that owns `startVertex`)
 * - `startVertex`: the index of the starting vertex (0–5, clockwise)
 * - `endVertex`: the index of the ending vertex (must be adjacent to startVertex)
 */
export interface VertexEdge {
    at: HexCoord;
    startVertex: 0 | 1 | 2 | 3 | 4 | 5;
    endVertex: 0 | 1 | 2 | 3 | 4 | 5;// End vertex of edge (must be adjacent to startVertex) - there are always only two possible numbers, as it needs to be adjacent.
}

export interface TraceEdge {
    edge: VertexEdge;
    showFrom: number;
    hideAfter: number;
    color: string;
    opacity: number;
    progress: number;
    pathId?: string;
  }

//a path that is drawn along the edges of the hexes
export interface VertexTracePath {
    id: string;
    start_vertex: {
      hex: HexCoord;         // The hex that owns the starting vertex
      vertex: 0 | 1 | 2 | 3 | 4 | 5; // Which vertex on the hex (clockwise: NE=0, E=1, etc.)
    };
    directions: number[];     // Directions from vertex to vertex (0 = NE, 1 = E, ..., 5 = NW)
    showFrom: number;
    step: number;
    hold: number;
    mode: TracePathMode;
    color: string;
}

export type ShapeType = 'hexagon'; // later: triangle, diamond, ring, etc.

export type AnimationMode = 'fade' | 'trace';

export interface ShapeDefinition {
    type: ShapeType;
    at: HexCoord;
    showFrom: number;
    hideAfter: number;
    animationMode: AnimationMode;
    color: string;
    size: number;
    opacity: number; // computed in registry based on scroll
    filled?: boolean;
    pageKey: string;
}