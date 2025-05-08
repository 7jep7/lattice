// // LatticeShape.tsx
// // This component declares a shape on the lattice background.
// // It registers the shape in the global registry scoped to the current route.
// // Shapes fade in/out based on scroll as computed in the registry hook.

// import { useEffect } from 'react';
// import { useLocation } from '@remix-run/react';
// import { registerShape } from './useLatticeShapeRegistry';
// import { ShapeDefinition } from './types';

// interface LatticeShapeProps {
//   type: 'hexagon';
//   at: { x: number; y: number };
//   showFrom: number;
//   hideAfter: number;
//   animationMode?: 'fade' | 'trace';
//   color?: string;
//   size?: number;
//   filled?: boolean;
// }

// export const LatticeShape: React.FC<LatticeShapeProps> = ({
//   type,
//   at,
//   showFrom,
//   hideAfter,
//   animationMode = 'fade',
//   color = 'rgba(255, 106, 0, 0.1)',
//   size = 1,
//   filled = true,
// }) => {
//   const location = useLocation();

//   useEffect(() => {
//     const shape: ShapeDefinition = {
//       type,
//       at,
//       showFrom,
//       hideAfter,
//       animationMode,
//       color,
//       size,
//       opacity: 1, // will be computed later
//       filled,
//       pageKey: location.pathname,
//     };
//     registerShape(shape);
//     console.log('✅ Registered shape:', shape);
//   }, [location.pathname, type, at.x, at.y, showFrom, hideAfter, animationMode, color, size, filled]);

//   return null; // purely declarative
// };
