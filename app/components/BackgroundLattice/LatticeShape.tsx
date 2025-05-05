// LatticeShape.tsx
// This component declares a shape on the lattice background.
// It registers the shape in the global registry and fades it in/out based on scroll.

import { useEffect } from 'react';
import { registerShape } from './useLatticeShapeRegistry';
import { ShapeDefinition } from './types';

interface LatticeShapeProps {
  type: 'hexagon';
  at: { x: number; y: number };
  showFrom: number;
  hideAfter: number;
  animationMode?: 'fade' | 'trace';
  color?: string;
  size?: number;
}

export const LatticeShape: React.FC<LatticeShapeProps> = ({
  type,
  at,
  showFrom,
  hideAfter,
  animationMode = 'fade',
  color = 'rgba(255, 106, 0, 0.1)',
  size = 1,
}) => {
  useEffect(() => {
    const shape: ShapeDefinition = {
      type,
      at,
      showFrom,
      hideAfter,
      animationMode,
      color,
      size,
      opacity: 0,
    };
    registerShape(shape);
  }, []);

  return null; // purely declarative
};
