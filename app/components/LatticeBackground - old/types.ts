export interface LatticeOptions {
    len: number;
    count: number;
    baseTime: number;
    addedTime: number;
    dieChance: number;
    spawnChance: number;
    sparkChance: number;
    sparkDist: number;
    sparkSize: number;
    baseLight: number;
    addedLight: number;
    shadowToTimePropMult: number;
    baseLightInputMultiplier: number;
    addedLightInputMultiplier: number;
    cx: number;
    cy: number;
    repaintAlpha: number;
    hueChange: number;
  }

  function hexToPixel(x: number, y: number, len: number, cx: number, cy: number): [number, number] {
    const hexHeight = Math.sqrt(3) * len;
    const px = cx + x * len * 1.5;
    const py = cy + y * hexHeight + (x % 2 === 0 ? 0 : hexHeight / 2);
    return [px, py];
  }
  