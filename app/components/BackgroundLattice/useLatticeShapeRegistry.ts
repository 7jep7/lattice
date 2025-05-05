// useLatticeShapeRegistry.ts
// This file defines a registry system for background shapes on the lattice.
// It exports:
// - registerShape(): called by <LatticeShape /> to add a shape to the registry
// - useLatticeShapeRegistry(): hook used by the canvas renderer to get shape visibility (opacity) based on scroll position

import { useEffect, useState } from 'react';
import { ShapeDefinition } from './types';

// Global shape registry (in-memory)
const shapeRegistry: ShapeDefinition[] = [];

// Called by each <LatticeShape /> to add itself
export function registerShape(def: ShapeDefinition) {
    console.log('Registering shape:', def);
    if (!shapeRegistry.includes(def)) {
        shapeRegistry.push(def);
    }
}

// Hook used by the canvas renderer to fetch updated shapes with dynamic opacity
export function useLatticeShapeRegistry(): ShapeDefinition[] {
  const [shapes, setShapes] = useState<ShapeDefinition[]>([]);

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;

      const updated = shapeRegistry.map((shape) => {
        let opacity = 0;

        if (scrollY >= shape.showFrom && scrollY <= shape.hideAfter) {
          const range = shape.hideAfter - shape.showFrom;
          const relY = scrollY - shape.showFrom;

          // Fades in and out across the scroll window
          opacity = shape.animationMode === 'fade'
            ? Math.max(0, 1 - Math.abs((relY - range / 2) / (range / 2)))
            : 1;
          opacity = 1
        }

        console.log({
            scrollY,
            showFrom: shape.showFrom,
            hideAfter: shape.hideAfter,
            opacity
          });

        return { ...shape, opacity};
      });

      setShapes(updated);
    };

    update();
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);

  return shapes;
}
