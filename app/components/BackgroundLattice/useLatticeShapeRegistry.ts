// // useLatticeShapeRegistry.ts
// // Defines a registry system for lattice background shapes.
// // Each page path gets its own registry bucket.
// // - registerShape(): called by <LatticeShape /> to register itself
// // - useLatticeShapeRegistry(): returns only the active route's shapes with computed opacity

// import { useEffect, useState } from 'react';
// import { useLocation } from '@remix-run/react';
// import { ShapeDefinition } from './types';

// // Global in-memory registry keyed by pathname
// const shapeRegistry: Record<string, ShapeDefinition[]> = {};

// // Register a shape to the current page key
// export function registerShape(def: ShapeDefinition) {
//   const key = def.pageKey;
//   if (!shapeRegistry[key]) shapeRegistry[key] = [];

//   const exists = shapeRegistry[key].some(
//     (s) => JSON.stringify(s) === JSON.stringify(def)
//   );

//   if (!exists) {
//     shapeRegistry[key].push(def);
//   }
// }

// // Hook for use in the background renderer
// export function useLatticeShapeRegistry(): ShapeDefinition[] {
//   const location = useLocation();
//   const pageKey = location.pathname;
//   const [shapes, setShapes] = useState<ShapeDefinition[]>([]);

//   useEffect(() => {
//     const update = () => {
//       const scrollY = window.scrollY;
//       const shapesForPage = shapeRegistry[pageKey] ?? [];

//       const updated = shapesForPage.map((shape) => {
//         let opacity = 0;

//         // if (scrollY >= shape.showFrom && scrollY <= shape.hideAfter) {
//         //   const range = shape.hideAfter - shape.showFrom;
//         //   const relY = scrollY - shape.showFrom;

//         //   opacity =
//         //     shape.animationMode === 'fade'
//         //       ? Math.max(0, 1 - Math.abs((relY - range / 2) / (range / 2)))
//         //       : 1;
//         // }
//         if (scrollY < shape.showFrom) {
//             opacity = 0;
//           } else {
//             opacity = 1; // ✅ force visibility
//           }

//         return { ...shape, opacity };
//       });

//       setShapes(updated);
//     };

//     update();
//     window.addEventListener('scroll', update);
//     return () => window.removeEventListener('scroll', update);
//   }, [pageKey]);

//   return shapes;
// }
