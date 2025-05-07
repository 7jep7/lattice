// types.ts
// Shared types used across the BackgroundLattice system

export interface HexCoord {
    x: number;
    y: number;
}

export interface TraceEdge {
    at: HexCoord;             // Which hex the edge belongs to
    edge: 0 | 1 | 2 | 3 | 4 | 5; // Clockwise edge index (E, NE, NW, W, SW, SE)
    showFrom: number;
    hideAfter: number;
    color: string;
    opacity: number;          // Controlled by registry
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
  