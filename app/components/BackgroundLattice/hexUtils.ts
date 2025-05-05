// hexUtils.ts
// Shared math utilities for converting between hex grid coordinates and pixel positions

export function hexToPixel(x: number, y: number, len: number, cx: number, cy: number): [number, number] {
    const hexHeight = Math.sqrt(3) * len;
    const px = cx + x * len * 1.5;
    const py = cy + y * hexHeight + (x % 2 === 0 ? 0 : hexHeight / 2);
    return [px, py];
  }
  