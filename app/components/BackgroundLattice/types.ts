// types.ts
// Shared types used across the BackgroundLattice system

export interface HexCoord {
    x: number;
    y: number;
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
  