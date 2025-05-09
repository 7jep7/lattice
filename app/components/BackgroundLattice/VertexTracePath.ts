import { HexCoord } from './types';

export type VertexTraceMode = 'trace' | 'flash' | 'appear';

export interface VertexEdge {
  hex: HexCoord;
  startVertex: 0 | 1 | 2 | 3 | 4 | 5;
  endVertex: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface TraceEdge {
    edge: VertexEdge;
    color: string;
    pathId?: string;
  
    startAnimationIn: number;
    endAnimationIn: number;
    startAnimationOut: number;
    endAnimationOut: number;
  
    mode: VertexTraceMode;
    targetOpacity: number;
}

const ALLOWED_DIRECTIONS: Record<0 | 1 | 2 | 3 | 4 | 5, number[]> = {
  0: [0, 2, 4],
  1: [1, 3, 5],
  2: [0, 2, 4],
  3: [1, 3, 5],
  4: [0, 2, 4],
  5: [1, 3, 5],
};

const VERTEX_DIRECTION_TO_EDGE: Record<
  0 | 1 | 2 | 3 | 4 | 5,
  Partial<Record<0 | 1 | 2 | 3 | 4 | 5, { dx: number; dy: number; startVertex: number; endVertex: number }>>
> = {
  0: {
    0: { dx: 0, dy: -1, startVertex: 2, endVertex: 1 },
    2: { dx: 0, dy: 0, startVertex: 0, endVertex: 1 },
    4: { dx: 0, dy: 0, startVertex: 0, endVertex: 5 },
  },
  1: {
    1: { dx: 1, dy: 0, startVertex: 5, endVertex: 0 }, //dy=0 for even x BUT (!): dy=1 for odd x.
    3: { dx: 0, dy: 0, startVertex: 1, endVertex: 2 },
    5: { dx: 0, dy: 0, startVertex: 1, endVertex: 0 },
  },
  2: {
    0: { dx: 0, dy: 0, startVertex: 2, endVertex: 1 },
    2: { dx: 0, dy: 1, startVertex: 0, endVertex: 1 },
    4: { dx: 0, dy: 0, startVertex: 2, endVertex: 3 },
  },
  3: {
    1: { dx: 0, dy: 0, startVertex: 3, endVertex: 2 },
    3: { dx: 0, dy: 1, startVertex: 5, endVertex: 4 },
    5: { dx: 0, dy: 0, startVertex: 3, endVertex: 4 },
  },
  4: {
    0: { dx: 0, dy: 0, startVertex: 4, endVertex: 5 },
    2: { dx: 0, dy: 0, startVertex: 4, endVertex: 3 },
    4: { dx: -1, dy: 0, startVertex: 0, endVertex: 5 }, //dy=0 for even x BUT (!): dy=1 for odd x.
  },
  5: {
    1: { dx: 0, dy: 0, startVertex: 5, endVertex: 0 },
    3: { dx: 0, dy: 0, startVertex: 5, endVertex: 4 },
    5: { dx: 0, dy: -1, startVertex: 3, endVertex: 4 },
  },
};

function asVertexIndex(n: number): 0 | 1 | 2 | 3 | 4 | 5 {
  if (n < 0 || n > 5) throw new Error(`Invalid vertex index: ${n}`);
  return n as 0 | 1 | 2 | 3 | 4 | 5;
}

export class VertexTracePath {
  id: string;
  start_vertex: { hex: HexCoord; vertex: 0 | 1 | 2 | 3 | 4 | 5 };
  directions: (0 | 1 | 2 | 3 | 4 | 5)[];
  mode: VertexTraceMode;

  startAnimationIn: number;
  endAnimationIn: number;
  startAnimationOut: number;
  endAnimationOut: number;

  color: string;
  targetOpacity: number;

  constructor({
    id,
    start_vertex,
    directions,
    mode,
    startAnimationIn,
    endAnimationIn,
    startAnimationOut,
    endAnimationOut,
    color,
    targetOpacity = 1,
  }: {
    id: string;
    start_vertex: { hex: HexCoord; vertex: 0 | 1 | 2 | 3 | 4 | 5 };
    directions: (0 | 1 | 2 | 3 | 4 | 5)[];
    mode: VertexTraceMode;
    startAnimationIn: number;
    endAnimationIn?: number;
    startAnimationOut: number;
    endAnimationOut?: number;
    color: string;
    targetOpacity?: number;
  }) {
    this.id = id;
    this.start_vertex = start_vertex;
    this.directions = directions;
    this.mode = mode;

    this.startAnimationIn = startAnimationIn;
    this.endAnimationIn = endAnimationIn ?? startAnimationIn + 600;
    this.startAnimationOut = startAnimationOut;
    this.endAnimationOut = endAnimationOut ?? startAnimationOut + 600;

    this.color = color;
    this.targetOpacity = targetOpacity;
  }

  generateEdges(): VertexEdge[] {
    const edges: VertexEdge[] = [];
    let currentHex = { ...this.start_vertex.hex };
    let currentVertex = this.start_vertex.vertex;

    for (const direction of this.directions) {
      const edge = this.computeNextEdge(currentHex, currentVertex, direction);
      console.log(`→ From hex (${currentHex.x},${currentHex.y}) vertex ${currentVertex} in dir ${direction} →`, edge);

      edges.push(edge);
      currentHex = edge.hex;
      currentVertex = edge.endVertex;
    }

    return edges;
  }

  generateTraceEdges(): TraceEdge[] {
    const edges: TraceEdge[] = [];
    const vertexEdges = this.generateEdges();
    const total = vertexEdges.length;

    vertexEdges.forEach((edge, i) => {
        let startIn = this.startAnimationIn;
        let endIn = this.endAnimationIn;
        let startOut = this.startAnimationOut;
        let endOut = this.endAnimationOut;
  
        if (this.mode === 'trace') {
          const durationIn = (this.endAnimationIn - this.startAnimationIn) / total;
          const durationOut = (this.endAnimationOut - this.startAnimationOut) / total;
  
          startIn = this.startAnimationIn + i * durationIn;
          endIn = startIn + durationIn;
          startOut = this.startAnimationOut + (total - i - 1) * durationOut; // only difference between trace and flash; first in last out vs first in first out.
          endOut = startOut + durationOut;
        } else if (this.mode === 'flash') {
          const duration = (this.endAnimationIn - this.startAnimationIn) / total;
          startIn = this.startAnimationIn + i * duration;
          endIn = startIn + duration;
          startOut = this.startAnimationOut + i * duration;
          endOut = startOut + duration;
        }
        // 'appear' uses global values directly
  
        edges.push({
          edge,
          pathId: this.id,
          color: this.color,
          startAnimationIn: startIn,
          endAnimationIn: endIn,
          startAnimationOut: startOut,
          endAnimationOut: endOut,
          mode: this.mode,
          targetOpacity: this.targetOpacity,
      });
    });

    return edges;
  }

  private computeNextEdge(currentHex: HexCoord, currentVertex: 0 | 1 | 2 | 3 | 4 | 5, direction: 0 | 1 | 2 | 3 | 4 | 5): VertexEdge {
    const edgeInfo = VERTEX_DIRECTION_TO_EDGE[currentVertex]?.[direction];
    if (!edgeInfo) {
      throw new Error(`❌ Invalid direction ${direction} from vertex ${currentVertex}`);
    }

    let dy = edgeInfo.dy;
    // Correction due to the half-y-offset of the hexagons in the odd columns (s. VERTEX_DIRECTION_TO_EDGE variable above))
    if (currentHex.x%2!==0 && ((currentVertex==1 && direction==1) || (currentVertex==4 && direction==4))){
        dy += 1;
    }

    return {

      hex: {
        x: currentHex.x + edgeInfo.dx,
        y: currentHex.y + dy,
      },
      startVertex: asVertexIndex(edgeInfo.startVertex),
      endVertex: asVertexIndex(edgeInfo.endVertex),
    };
  }

  scrollSpan(): number {
    return this.endAnimationOut - this.startAnimationIn;
  }

  scrollProgress(scrollY: number): number {
    if (scrollY <= this.startAnimationIn) return 0;
    if (scrollY >= this.endAnimationOut) return 1;
    return (scrollY - this.startAnimationIn) / this.scrollSpan();
  }

  traceInProgress(scrollY: number): number {
    if (scrollY <= this.startAnimationIn) return 0;
    if (scrollY >= this.endAnimationIn) return 1;
    return (scrollY - this.startAnimationIn) / (this.endAnimationIn - this.startAnimationIn);
  }

  traceOutProgress(scrollY: number): number {
    if (scrollY <= this.startAnimationOut) return 1;
    if (scrollY >= this.endAnimationOut) return 0;
    return 1 - (scrollY - this.startAnimationOut) / (this.endAnimationOut - this.startAnimationOut);
  }

  fadeOpacity(scrollY: number): number {
    if (scrollY < this.startAnimationIn) return 0;
    if (scrollY >= this.endAnimationOut) return 0;
    if (scrollY < this.endAnimationIn) {
      return ((scrollY - this.startAnimationIn) / (this.endAnimationIn - this.startAnimationIn)) * this.targetOpacity;
    }
    if (scrollY > this.startAnimationOut) {
      return ((this.endAnimationOut - scrollY) / (this.endAnimationOut - this.startAnimationOut)) * this.targetOpacity;
    }
    return this.targetOpacity;
  }
}
