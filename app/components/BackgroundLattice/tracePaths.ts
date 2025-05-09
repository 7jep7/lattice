import { VertexTracePath } from './VertexTracePath';

export const latticePaths: VertexTracePath[] = [
//   new VertexTracePath({
//     id: 'p1',
//     start_vertex: { hex: { x: 0, y: 6 }, vertex: 5 },
//     directions: [1,2,5,4,3,0],
//     mode: 'flash',
//     startAnimationIn: 100,
//     startAnimationOut: 700,
//     color: 'rgba(255, 106, 0, 0.9)',
//   }),
//   new VertexTracePath({
//     id: 'bridge-left',
//     start_vertex: { hex: { x: -4, y: -6 }, vertex: 3 },
//     directions: [1, 4, 1, 4],
//     mode: 'trace',
//     startAnimationIn: 600,
//     startAnimationOut: 1200,
//     color: 'rgba(255, 106, 0, 0.6)',
//   }),
  new VertexTracePath({
    id: 'concentric-rings',
    start_vertex: { hex: { x: -2, y: 2 }, vertex: 0 },
    directions: [2,3,4,5,0,1,   0,1,2,3,2,3,4,3,4,5,4,5,0,5,0,1, 0,1,2,1,   
        0,1,2,3,2,3,2,3,4,3,4,3,4,5,4,5,4,5,0,5,0,5,0,1,0,1,0,1,2,1,2,1,2],
    mode: 'trace',
    startAnimationIn: 0,
    startAnimationOut: 1800,
    color: 'rgba(255, 106, 0, 0.6)',
  }),
  // add more...
];
