import { shapeRegistry } from "./shapeRegistry";

interface ShapeDefinition {
  name: string; // Shape name (must match a key in shapeRegistry)
  x: number; // X position
  y: number; // Y position
  size: number; // Size of the shape
  start: number; // Scroll position where animation starts
  height: number; // Scroll height for full animation
}

export function ShapeManager(
  canvas: HTMLCanvasElement,
  shapes: ShapeDefinition[]
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scrollY = window.scrollY;

    shapes.forEach(({ name, x, y, size, start, height }) => {
      const progress = Math.min(Math.max((scrollY - start) / height, 0), 1); // Calculate progress (0 to 1)
      const drawShape = shapeRegistry[name];
      if (drawShape) {
        drawShape(ctx, progress, x, y, size); // Draw the shape
      }
    });

    requestAnimationFrame(render);
  };

  render();
}