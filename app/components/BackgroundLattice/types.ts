// types.ts
// Shared types used across the BackgroundLattice system

export type TracePathMode = 'appear' | 'flash' | 'trace';


export interface HexCoord {
    x: number;
    y: number;
}

//a path that is drawn along the edges of the hexes
export interface VertexTracePath {
    id: string;
    start_vertex: {
      hex: HexCoord;         // The hex that owns the starting vertex
      vertex: 0 | 1 | 2 | 3 | 4 | 5; // Which vertex on the hex (clockwise: NE=0, E=1, etc.)
    };
    directions: (0 | 1 | 2 | 3 | 4 | 5)[];    // Directions from vertex to vertex (0 = NE, 1 = E, ..., 5 = NW)
    
    mode: TracePathMode;
    startAnimationIn: number;
    endAnimationIn?: number;   // will default to startAnimationIn + 100
    startAnimationOut: number;
    endAnimationOut?: number;  // will default to startAnimationOut + 100
    color: string;
    targetOpacity?: number; // default to 1
}

export type ShapeType = 'hexagon'; // later: triangle, diamond, ring, etc.

// export type AnimationMode = 'fade' | 'trace';

// export interface ShapeDefinition {
//     type: ShapeType;
//     at: HexCoord;
//     showFrom: number;
//     hideAfter: number;
//     animationMode: AnimationMode;
//     color: string;
//     size: number;
//     opacity: number; // computed in registry based on scroll
//     filled?: boolean;
//     pageKey: string;
// }