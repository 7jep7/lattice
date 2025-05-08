import { HexCoord, TraceEdge, VertexTracePath, VertexEdge } from './types';

/**
 * From a given vertex, only 3 out of the 6 directions are allowed.
 * This map encodes for each vertex which directions are valid.
 */
const ALLOWED_DIRECTIONS: Record<0 | 1 | 2 | 3 | 4 | 5, number[]> = {
    0: [0, 2, 4], // NE vertex connects to NE, SE, W
    1: [1, 3, 5], // E  vertex connects to E, SW, NW
    2: [0, 2, 4], // SE vertex connects to NE, SE, W
    3: [1, 3, 5], // SW vertex connects to E, SW, NW
    4: [0, 2, 4], // W  vertex connects to NE, SE, W
    5: [1, 3, 5], // NW vertex connects to E, SW, NW
  };

export const VERTEX_DIRECTION_TO_EDGE: Record<
  0 | 1 | 2 | 3 | 4 | 5,
  Partial<Record<0 | 1 | 2 | 3 | 4 | 5, { dx: number; dy: number; startVertex: number; endVertex: number }>>
> = {
  0: {
    0: { dx: 1, dy: -1, startVertex: 4, endVertex: 5 },
    2: { dx: 0, dy: 0, startVertex: 0, endVertex: 1 },
    4: { dx: 0, dy: 0, startVertex: 0, endVertex: 5 },
  },
  1: {
    1: { dx: 1, dy: 0, startVertex: 5, endVertex: 0 },
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
    3: { dx: -1, dy: 0, startVertex: 1, endVertex: 2 },
    5: { dx: 0, dy: 0, startVertex: 3, endVertex: 4 },
  },
  4: {
    0: { dx: 0, dy: 0, startVertex: 4, endVertex: 5 },
    2: { dx: 0, dy: 0, startVertex: 4, endVertex: 3 },
    4: { dx: -1, dy: 0, startVertex: 0, endVertex: 5 },
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

  /**
 * Computes the next trace edge starting from a given hex + vertex, moving in a specified direction.
 * 
 * - Validates the direction is legal from the vertex
 * - Returns the edge drawn on the current hex: { at, startVertex, endVertex }
 * 
 * @param currentHex The hex that owns the current vertex
 * @param currentVertex The current vertex index (0–5) on that hex
 * @param direction Global movement direction (0–5)
 * @returns The edge drawn on this hex from startVertex to endVertex
 * @throws If the direction is invalid from the given vertex
 */
export function computeNextEdgeFromVertexAndDirection(
    currentHex: HexCoord,
    currentVertex: 0 | 1 | 2 | 3 | 4 | 5,
    direction: 0 | 1 | 2 | 3 | 4 | 5
  ): VertexEdge {
    const edgeInfo = VERTEX_DIRECTION_TO_EDGE[currentVertex]?.[direction];
  
    if (!edgeInfo) {
      throw new Error(
        `❌ Invalid direction ${direction} from vertex ${currentVertex}`
      );
    }
  
    return {
      at: {
        x: currentHex.x + edgeInfo.dx,
        y: currentHex.y + edgeInfo.dy,
      },
      startVertex: edgeInfo.startVertex as 0 | 1 | 2 | 3 | 4 | 5,
      endVertex: edgeInfo.endVertex as 0 | 1 | 2 | 3 | 4 | 5,
    };
  }

  /**
 * Expands a vertex-based trace path into a sequence of traceable edges.
 */
export function traverseVertexPath(path: VertexTracePath): TraceEdge[] {
    const { id, start_vertex, directions, showFrom, step, hold, mode, color } = path;
  
    let currentHex = { ...start_vertex.hex };
    let currentVertex = start_vertex.vertex;
  
    const result: TraceEdge[] = [];
    const fadeOutStart = showFrom + directions.length * step + hold;
  
    directions.forEach((d, i) => {
      const dir = asVertexIndex(d); // ⬅️ Safely cast direction to the literal type

      const edge = computeNextEdgeFromVertexAndDirection(currentHex, currentVertex, dir);
  
      const edgeShow = showFrom + i * step;
      const hideAfter =
        mode === 'appear' ? Infinity :
        mode === 'flash' ? edgeShow + step + hold :
        fadeOutStart;
  
      result.push({
        edge: {
            at: edge.at,
            startVertex: asVertexIndex(edge.startVertex),
            endVertex: asVertexIndex(edge.endVertex),
          },
        showFrom: edgeShow,
        hideAfter,
        color,
        opacity: 0,
        progress: 0,
        pathId: id,
      });
  
      // Move to next vertex location
      const move = { x: edge.at.x - currentHex.x, y: edge.at.y - currentHex.y };
      currentHex = edge.at;
      currentVertex = (edge.endVertex + 0) as 0 | 1 | 2 | 3 | 4 | 5; // the next step starts from the last endpoint
    });
  
    return result;
  }