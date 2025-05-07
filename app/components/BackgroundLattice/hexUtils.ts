// hexUtils.ts
// Shared math utilities for converting between hex grid coordinates and pixel positions
// -------------------------------------------------------
// Hex Grid Coordinates:
//  The origin is always in the center of the screen (also for cartesian). Units are pixels.
//  Flat-topped hexes. Edges are 0-5 (clockwise, starting from NORTH). 
//  Vertices are 0-5 (clockwise, starting from NORTHEAST).
//  Each hex has 6 sides, labeled 0–5 (clockwise starting top)
// ----------------------------------------------------
// Canvas Pixel Coordinates (Cartesian):
//  The origin is in the top-left corner of the canvas.
//  The x-axis goes right, and the y-axis goes down.
//  The center of the canvas is (canvas.width / 2, canvas.height / 2).
//  The y-axis is inverted compared to the hex grid coordinates.
//  Used for actual drawing (via ctx.moveTo(...), ctx.lineTo(...), etc.)
// ----------------------------------------------------
// Conversion functions needed
//  hexToPixel: Hex center → canvas pixel
//  



import { HexCoord } from './types';

/**
 * Converts hexagonal grid coordinates to pixel coordinates.
 *
 * This function calculates the pixel position of a hexagonal grid cell
 * based on its grid coordinates `(x, y)`, the side length of the hexagon `len`,
 * and the center point `(cx, cy)` of the grid in pixel space.
 *
 * @param x - The x-coordinate of the hexagonal grid cell (from center of the screen, towards the right.) Not: y=0 corresponds to all hexagons in the row (but for odd x, they are half a hexHight lower).
 * @param y - The y-coordinate of the hexagonal grid cell (from center of the screen, towards the bottom.)
 * @param len - The side length of the hexagon. (= radius; from center to vertix)
 * @param cx - The x-coordinate of the center of the grid in pixel space.
 * @param cy - The y-coordinate of the center of the grid in pixel space.
 * @returns A tuple `[px, py]` representing the pixel coordinates of the hexagonal grid cell.
 */
export function hexToPixel(x: number, y: number, len: number, cx: number, cy: number): [number, number] {
    const hexHeight = Math.sqrt(3) * len; //Pythagoras
    const px = cx + x * len * 1.5;
    const py = cy + y * hexHeight + (x % 2) * (hexHeight / 2);
    return [px, py];
}


/**
 * Calculates the coordinates of a corner of a regular hexagon.
 *
 * @param cx - The x-coordinate of the center of the hexagon. In cartesian (with origin at top left).
 * @param cy - The y-coordinate of the center of the hexagon. In cartesian (with origin at top left).
 * @param radius - The distance from the center of the hexagon to any of its corners. (=hexagon edge length).
 * @param i - The index of the corner (0 to 5, corresponding to the six corners of the hexagon). Clockwise, from Northeast=0.
 * @returns A tuple containing the x and y cartesian coordinates of the specified hexagon corner.
 */
export function getHexCorner(cx: number, cy: number, radius: number, i: number): [number, number] {
    const angle_deg = 60 * i - 60; //angle clockwise from the positive x axis)
    const angle_rad = (Math.PI / 180) * angle_deg;
    return [
      cx + radius * Math.cos(angle_rad),
      cy + radius * Math.sin(angle_rad),
    ];
}

/**
 * Calculates the vertices of a specific edge of a hexagonal tile.
 *
 * @param hex - The coordinates of the hexagonal tile.
 * @param edge - The index of the edge (0 to 5) for which the vertices are to be calculated.
 * @param radius - The radius of the hexagon.
 * @param centerX - The x-coordinate of the center of the hexagonal grid.
 * @param centerY - The y-coordinate of the center of the hexagonal grid.
 * @returns A tuple containing two vertices, each represented as a tuple of x and y cartesian pixel coordinates.
 */
export function getEdgeVertices(
    hex: HexCoord,
    edge: number,
    radius: number,
    centerX: number,
    centerY: number
  ): [[number, number], [number, number]] {
    const [cx, cy] = hexToPixel(hex.x, hex.y, radius, centerX, centerY);
    const a = getHexCorner(cx, cy, radius, edge);
    const b = getHexCorner(cx, cy, radius, (edge + 1) % 6);
    return [a, b];
}